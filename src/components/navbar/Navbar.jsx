import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled);
    return (    
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container"> 
                <div className="left">
                    <img src="https://img.search.brave.com/GAWh4mkxAqNHCWfLj8fk1bdTbAlBGEfMVERXQuNzJpg/fit/1200/562/ce/1/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy8yLTIzMjM2X3Ry/YW5zcGFyZW50LW5l/dGZsaXgtbG9nby0y/MDE4LWNsaXBhcnQu/cG5n"
                         alt="" />
                    <span>Homepage</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>New</span>
                    <span>Popular</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://i.imgur.com/0HVlygL.jpg" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
