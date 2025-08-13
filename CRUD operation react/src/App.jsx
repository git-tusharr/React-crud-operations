import { BrowserRouter,Routes,Route } from "react-router-dom";

// i have imported componets from pages
import Home from "./pages/Home";
import Insert from "./pages/insert";
import Display from "./pages/Display";
import Contact from "./pages/Contact";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Layout from "./Layout";
import MyEdit from "./pages/MyEdit";



const App=()=>{

  return(
    <>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

            <Route path="Home" element={<Home/>}></Route>
            <Route index element={<Home></Home>}></Route>
            <Route path="Insert" element={<Insert></Insert>}></Route>
            <Route path="Contact" element={<Contact></Contact>} ></Route>   
            <Route path="Display" element={<Display></Display>}   ></Route>
            <Route path="Search" element={<Search></Search>}></Route>
            <Route path="Update" element={<Update></Update>}></Route>
            <Route path="myEdit/:id" element={<MyEdit></MyEdit>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>

    
    
    </>
  )
}

export default App;