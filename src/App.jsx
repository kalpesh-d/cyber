import NavBar from "./components/NavBar"
import Payment from "./components/Payment"
import Steps from "./components/Steps"

function App() {
  return (
    <>
      <header className="border-b-4">
        <NavBar />
      </header>
      <main>
        <Steps />
        <Payment />
      </main>
    </>
  )
}

export default App
