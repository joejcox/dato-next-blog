export default function MainContent({ children, classes }) {
  return (
    <main className="py-16" role="main">
      <div className={`container ${classes ? classes : null}`}>{children}</div>
    </main>
  )
}
