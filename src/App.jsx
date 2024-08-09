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

        <div className="w-full bg-stone-100 p-8">
          <section className="container mx-auto grid grid-cols-2 justify-center px-10">
            <Summary />
            <Payment />
          </section>
        </div>
      </main>
    </>
  )
}

export default App
