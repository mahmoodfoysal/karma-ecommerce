import { Outlet } from "react-router-dom";
import NavBar from "./component/Shared/NavBar/NavBar";
import Footer from "./component/Shared/Footer/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container mx-auto px-4 outlet-style">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
