import Header from "../header"
import Footer from "../footer"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()

  const homeClass = router.pathname === "/" ? "homepage" : null

  return (
    <div className={`flex flex-col h-full ${homeClass}`}>
      <Header />
      <div className="page-wrapper">{children}</div>
      <Footer />
    </div>
  )
}
