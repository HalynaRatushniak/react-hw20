import { NavLink } from "react-router-dom";
import "./styles/Navigation.css";

 function Navigation() {
    let activeStyle = {
        textDecoration: "underline",
        color: "#5e5e5e",
    };
    return (
        <div className="Nav">
            <div className="profile">
                <div className="profile-photo">
                    <img
                        src="https://i.ytimg.com/vi/QThR2kPbCJw/maxresdefault.jpg"
                        alt="Rick&Morty"
                    />
                    <p>Rick and Morty</p>
                </div>
                <div className="profile-info">
                    <p className="user-name">@Rick&Morty</p>
                    <div className="info-nav">
                        <div className="info-social">
                            <p>
                                Posts <br />16
                            </p>
                            <p>
                                Following <br />
                                216
                            </p>
                            <p>
                                Followers <br />
                                2533
                            </p>
                        </div>
                        <div className="navigation">
                            <NavLink
                                to="/"
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                Main
                            </NavLink>
                            <NavLink
                                to="/character"
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                Characters
                            </NavLink>
                            <NavLink
                                to="/episodes"
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                {" "}
                                Episodes
                            </NavLink>
                            <NavLink
                                to="/contacts"
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                Contacts
                            </NavLink>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navigation;