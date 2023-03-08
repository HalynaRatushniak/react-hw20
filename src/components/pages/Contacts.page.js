import { Outlet } from "react-router-dom";

import { contacts } from "../ContactList";
import Contact from "../Contact";
import "./pages-style/ContactPage.css";

function Contacts() {
    let contactList = contacts;
    return (
        <div className="Contacts">
            <div className="left-menu">
                <div className="phone-list">
                    {contactList.map((element, i) => {
                        return <Contact data={element} key={i} />;
                    })}
                </div>
            </div>
            <Outlet context={contactList} />
        </div>
    );
}
export default Contacts;