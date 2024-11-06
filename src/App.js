import {Billing, Contract, Home, Navbar} from "./component"
import {Statistics} from "./component"
import { styles} from "./util/styles"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-start my__container pl:px-36 px-0 bg-black mx-auto w-[80vw]">
        <Home />
        <Statistics />
        <Contract />
        <Billing />
      </div>
    </>  
  )
  }
  
export default App