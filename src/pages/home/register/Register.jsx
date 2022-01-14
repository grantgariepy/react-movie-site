import "./register.scss"

export default function Register() {
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://i.imgur.com/BvqQtc6.png" alt="" />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Search and find all your favorite movies!</h1>
                <h2>See rating from your favorite websites!</h2>
                <p>Ready to find your favorite movies and shows? Sign up now!</p>
                <div className="input">
                    <input type="email" placeholder="email address" name="" id="" />
                    <button className="registerButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}
