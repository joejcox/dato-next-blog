import Head from "next/head"
import axios from "axios"
import Image from "next/image"
import MainContent from "../../components/MainContent"
import Link from "next/link"
import { convertToSlug } from "../../lib/utils"

export default function Blog({ images, articles }) {
  return (
    <MainContent classes="text-center">
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className="title my-16 text-center">A web developer blog</h1>
      {articles.map((article, index) => {
        const slug = convertToSlug(article.title)
        if (index > 9) return null
        const image = { ...images[index] }
        return (
          <article className="mx-auto w-[700px] mb-16" key={article.id}>
            <figure className="relative w-full h-[300px] cursor-pointer bg-dark">
              <Link passHref href={`/blog/${slug}`}>
                <Image
                  className="transition ease-in-out duration-200 hover:opacity-80"
                  src={image.urls.regular}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={image.urls.small}
                  placeholder="blur"
                />
              </Link>
            </figure>
            <h2 className="title">
              <Link href={`/blog/${slug}`}>
                <a className="text-primary-base hover:text-primary-dark">
                  {article.title}
                </a>
              </Link>
            </h2>
          </article>
        )
      })}
    </MainContent>
  )
}

export async function getStaticProps() {
  const imagesRequest = axios.get(
    `https://api.unsplash.com/photos/?page=3&client_id=${process.env.NEXT_UNSPLASH_CLIENT_ID}`
  )
  const postsRequest = axios.get("https://jsonplaceholder.typicode.com/posts")
  const [images, posts] = await Promise.all([imagesRequest, postsRequest])

  return {
    props: {
      images: images.data,
      articles: posts.data,
    },
    revalidate: 10,
  }
}
