import Logo from "../assets/icons/logo.png";
import World from "../assets/icons/world.png";
import Menu from "../assets/icons/menu.png";
import User from "../assets/images/A.png"


export default function Logoheader({list1, list2}) {
return (
    <header  className="logoheader">
    <div className="header__container">
        <img src={Logo} alt="Logo" className="header__logo" />

        <div className="navbar">
         <ul>
          <li> <a href="#experiences">{list1}</a></li>
          <li> <a href="onlineExperiences">{list2}</a></li>
        </ul>
        </div>

        <div className="header__menu">
         <p className="airbnb-text">Airbnb your home</p>
        <img src={World} alt="World" className="header__world" />
          <div className="header__menu-button">
           <img src={Menu} alt="Menu" className="header__menu-icon" />
           <img src={User} alt="User" className="header__menu-icon" />
            
         </div>
    </div>
    </div>
     </header>
)

}