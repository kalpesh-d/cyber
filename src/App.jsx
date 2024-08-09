import NavBar from "./components/NavBar"
import Payment from "./components/Payment"
import Steps from "./components/Steps"
import Summary from "./components/Summary"

function App() {
  return (
    <>
      <header className="border-b-4">
        <NavBar />
      </header>
      <main>
        <Steps />
        <Summary />
        <Payment />
      </main>
    </>
  )
}

export default App
