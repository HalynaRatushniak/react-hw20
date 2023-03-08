import {Route, Routes as InitialRoutes} from "react-router-dom";
import Navigation from "../components/Navigation";
import Main from "../components/pages/Main.page";
import Contacts from "../components/pages/Contacts.page";
import Character from "../components/pages/Character.page";
import Episodes from "../components/pages/Episodes.page";
import Contact from "../components/Contact";

function Routes(){
    return (
        <div>
            <Navigation/>
            <InitialRoutes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/character" element={<Character/>}></Route>
                <Route path="/episodes" element={<Episodes/>}></Route>
                <Route path="/contacts" element={<Contacts/>}>
                    <Route path=":userId" element={<Contact/>}/>
                </Route>
            </InitialRoutes>
        </div>
    );
}
export default Routes;