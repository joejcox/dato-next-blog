// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getUnsplashEnv(req, res) {
  res.status(200).json({ data: process.env.SECRET_ID })
}
