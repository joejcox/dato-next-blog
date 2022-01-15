import MainContent from "../../components/MainContent"
import axios from "axios"
import { convertFromSlug } from "../../utils"
import Image from "next/image"

export default function Post({ post, image }) {
  post = post[0]
  const img = { ...image[Math.floor(Math.random() * image.length)] }
  return (
    <MainContent>
      <figure className="relative w-full h-[400px] my-16">
        <Image
          src={img.urls.regular}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          blurDataURL={img.urls.small}
          placeholder="blur"
        />
      </figure>
      <h1 className="title">{post.title}</h1>
      <p>{post.body}</p>
    </MainContent>
  )
}

export async function getServerSideProps(params) {
  const title = convertFromSlug(params.query.title)

  const postRequest = axios.get(
    `https://jsonplaceholder.typicode.com/posts/?title=${title}`
  )

  const imageRequest = axios.get(
    `https://api.unsplash.com/photos/?random&count=1&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`
  )

  const [post, image] = await Promise.all([postRequest, imageRequest])
  return {
    props: {
      post: post.data,
      image: image.data,
    },
  }
}
