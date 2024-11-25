import FooterLogo from "../assets/Home/Footer/footer-logo.svg"
import Call from "../assets/Home/Footer/call.svg"
import Mail from "../assets/Home/Footer/mail.svg"
import Location from "../assets/Home/Footer/location.svg"


import X from "../assets/Home/ContactUs/x.svg"
import Instagram from "../assets/Home/ContactUs/Instagram.svg"
import Facebook from "../assets/Home/ContactUs/FaceBook.svg"
import YouTube from "../assets/Home/ContactUs/YouTube.svg"

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-logo-nd-para-wrap">
              <div className="footer-logo">
                <img src={FooterLogo} alt="" />
              </div>

              <p className="footer-main-para">
              Lorem ipsum dolor sit amet. Quo laudantium saepe ut consequat impedit et necessitatibus libero et dolor porro aut nesciunt quidem est quas rerum.
              </p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-lg-3">
            <div className="quike-links-wrap">
              <h5 className="quike-links-tit">
              Quick Link
              </h5>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="f-quike-links-list">
                    <li>About</li>
                    <li>Think We Do</li>
                    <li>Why Us</li>
                    <li>Testimonial</li>
                    <li>Career</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="f-quike-links-list">
                    <li>Blog</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-lg-3">
            <div className="footer-Contact-Us-wrap">
              <h5 className="f-Contact-Us-tit">
              Contact Us
              </h5>
              
              <ul className="f-quike-links-list">
                <li><img src={Call} alt="" /> <p>+123 234 98908</p></li>
                <li><img src={Mail} alt="" /> <p>venture123@gmail.com</p></li>
                <li><img src={Location} alt="" /> <p>98Rovig St, Big city picu 23456</p></li>
                
              </ul>

              <div className="footer-social-media">
          <p>Follow Us On</p>
          <div className="f-social-media-wrap">
            <img src={Instagram} alt="" />
            <img src={Facebook} alt="" />
            <img src={YouTube} alt="" />
            <img src={X} alt="" />
          </div>
        </div>

            </div>
          </div>
        </div>

        
      </div>
      <p className="footer-copy-rights">Copyrights 2024    All Right Reserved Design by industro venture  
        
        </p>
    </footer>
    </>
  )
}

export default Footer