import { GraphQLClient } from "graphql-request"

export function request({ query }) {
  const client = new GraphQLClient("https://graphql.datocms.com", {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })

  return client.request(query)
}
