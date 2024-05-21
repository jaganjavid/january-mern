import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";



const App = () => {
  return (
    <div>

      <Header />

      <main>
        <div className="container mx-auto">
           <Outlet/>
        </div>
      </main>

     <Footer/>

    </div>
  )
}

export default App