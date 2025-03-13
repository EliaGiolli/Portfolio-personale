import Navbar from "../layouts/Navbar"
import Card from "../layouts/Card"
function Homepage() {
  return (
    <>
      <Navbar />
      <main className="bg-secondary">
        <Card />
      </main>
    </>
  )
}

export default Homepage