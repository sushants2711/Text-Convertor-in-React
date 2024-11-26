
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
  return (
    <>
      <Navbar title = "Home" about = "About" contact = "Contact" />
      <TextForm  headingis = " Enter Your Text Below "/>
    </>
  )
}

export default App
