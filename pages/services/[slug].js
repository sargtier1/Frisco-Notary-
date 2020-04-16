import { useRouter } from 'next/router'
import Head from 'next/head'
import { Spinner, Row, Col, Spacer } from '@zeit-ui/react'
import PostHeader from '../../components/services/header'
import PostBody from '../../components/services/body'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/html'
import Layout from '../../components/layout'
import Hero from '../../components/hero'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  console.log(post.coverImage)
  return (
    <>
      {router.isFallback ? (
        <Row style={{ padding: '10px 0', width: '50px' }}>
          <Spinner size='large' />
        </Row>
      ) : (
        <Layout title={post.title}>
          <Head>
            <meta property='og:image' content={post.coverImage} />
          </Head>
          <Hero title={post.title} description={post.excerpt} />
          <Row justify='center'>
            <Col>
              <PostHeader coverImage={post.coverImage} />
            </Col>
          </Row>
          <Spacer y={1} />
          <Row justify='center'>
            <Col>
              <PostBody content={post.content} />
            </Col>
          </Row>
        </Layout>
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
