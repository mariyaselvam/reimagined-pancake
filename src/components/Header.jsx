import Logo from "../assets/Home/Header/light-bg-logo.png"
import HamburgerMenuImg from "../assets/Home/Header/hamburger.png"

const Header = () => {
  return (
   <>
   <header>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="header-logo--nav-wrap">
                    <div className="main-logo">
                        <img src={Logo} alt="" />
                    </div>

                    <ul className="nav-options">
                        <li>About</li>
                        <li>Think We Do</li>
                        <li>Why Us</li>
                        <li>Testimonial</li>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <button className="hamburger-menu">
                        <img src={HamburgerMenuImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
   </header>
   </>
  )
}

export default Header