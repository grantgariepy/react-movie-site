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
                    <img src="https://i.imgur.com/BvqQtc6.png"
                         alt="" />
                    <span>Movies</span>
                    <span>TV Shows</span>
                    <span>New</span>
                    <span>Popular</span>
                    <span>Top 250</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>USER</span>
                    <Notifications className="icon"/>
                    <img src="https://img.search.brave.com/b__Lnnf9Na4Uc8PgxEPoB9yFlBgJk42doyjl-D46TpM/fit/980/982/ce/1/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z181NjkyMDUucG5n" alt="" />
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
