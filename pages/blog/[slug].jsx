import MainContent from "../../components/MainContent"
import axios from "axios"
import { convertFromSlug } from "../../lib/utils"
import Image from "next/image"

export default function Post({ post, image }) {
  const title = post[0].title
  const img = { ...image[Math.floor(Math.random() * image.length)] }
  return (
    <MainContent>
      <figure className="relative w-full h-[400px] my-16">
        <Image
          src={img.urls.regular}
          alt={title}
          layout="fill"
          objectFit="cover"
          blurDataURL={img.urls.small}
          placeholder="blur"
        />
      </figure>
      <h1 className="title">{title}</h1>
      <p>{post.body}</p>
    </MainContent>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`)

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.map((post) => ({ params: { slug: post.title } }))

  // console.log(paths)

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" }
}

export async function getStaticProps({ params }) {
  const title = convertFromSlug(params.slug)
  const postRequest = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/?title=${title}`
  )

  const imageRequest = await axios.get(
    `https://api.unsplash.com/photos/?random&count=1&client_id=${process.env.NEXT_UNSPLASH_CLIENT_ID}`
  )

  const [post, image] = await Promise.all([postRequest, imageRequest])
  return {
    props: {
      post: post.data,
      image: image.data,
    },
    // revalidate: 30,
  }
}
