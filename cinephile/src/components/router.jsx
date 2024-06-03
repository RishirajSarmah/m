import SignUp from "./sign-up";
import Navbar from "./navbar";
import { 
    Routes,
    Route
} 
from "react-router-dom";

function ReactRouter() {
    return(
        <>
       <Routes>
                <Route exact path = "/cinephile" element = {<Navbar/>}/>
                <Route exact path = "/cinephile/signup" element={<SignUp/>}/>
            </Routes>    
      
        </>
    )
}
export default ReactRouter;
