import {TeacherCard, Contract, Home, Navbar, About, Footer} from "./component"
import {Statistics} from "./component"

const App = () => {
    return (
      <>
        <Navbar />
        <div className="flex flex-col justify-start my__container pl:px-36 px-0 bg-black mx-auto w-[80vw]">
          <Home />
          <Statistics />
          <About />
          <TeacherCard />
          <Contract />
          <Footer />
        </div>
      </>  
    )
  }
  
export default App