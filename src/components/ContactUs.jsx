import Icon1 from '../assets/Home/ContactUs/contact-us-card-icon-1.svg'
import Icon2 from '../assets/Home/ContactUs/contact-us-card-icon-2.svg'
import Icon3 from '../assets/Home/ContactUs/contact-us-card-icon-3.svg'
import Icon4 from '../assets/Home/ContactUs/contact-us-card-icon-4.svg'
import X from "../assets/Home/ContactUs/x.svg"
import Instagram from "../assets/Home/ContactUs/Instagram.svg"
import Facebook from "../assets/Home/ContactUs/FaceBook.svg"
import YouTube from "../assets/Home/ContactUs/YouTube.svg"

const ContactUs = () => {
  return (
    <>
     <section className="contact-us-sec">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                   <div className="contact-us-form-wrap">
                     <h3 className="contact-form-main-tit">
                     Get in touch with Us
                     </h3>

                     <form className="contact-form" action="">
                        <div className="row">
                            <div className="col-md-6">
                                <input className='first-name' type="text" name="" id="" placeholder="First Name" />
                            </div>
                            <div className="col-md-6">
                                <input className='last-name' type="text" name="" id="" placeholder="Last Name" />
                            </div>
                            <div className="col-md-12">
                            <select className='select' value="Select the Services" placeholder="" name="" id="">
                                <option value="">Service 1</option>
                                <option value="">Service 2</option>
                                <option value="">Service 3</option>
                                <option value="">Service 4</option>
                                <option value="">Service 5</option>
                                <option value="">Service 6</option>
                            </select>
                            </div>
                            <div className="col-md-12">
                            <textarea className='textarea' placeholder="Message" rows="5" name="" id=""></textarea>
                            </div>
                           
                           <div className="col-md-12">
                            <button className="contact-form-btn">
                            Send Message
                            </button>
                            </div>
                        </div>
                     </form>
                   </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-us-cont-social-links-wrap">
                      <h3 className="contact-us-cont-tit">
                      Contact Details
                      </h3>
                      <p className="contact-us-cont-main-para">Lorem ipsum dolor sit amet. Quo laudantium saepe ut consequat impedit et necessitatibus libero et dolor porro aut nesciunt quidem est quas rerum.</p>

                      <div className="contact-us-cont-card-wrap">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-us-cont-card">
                                    <img src={Icon1} alt="" />
                                    <div className="contact-us-cont-card-cont">
                                        <h4>Call Us</h4>
                                        <p>+123 234 98908</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-us-cont-card">
                                    <img src={Icon2} alt="" />
                                    <div className="contact-us-cont-card-cont">
                                        <h4>Email Us</h4>
                                        <p>venture123@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-us-cont-card">
                                    <img src={Icon3} alt="" />
                                    <div className="contact-us-cont-card-cont">
                                        <h4>LinkedIn</h4>
                                        <p>Linkedin industroventures</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-us-cont-card">
                                    <img src={Icon4} alt="" />
                                    <div className="contact-us-cont-card-cont">
                                        <h4>Address</h4>
                                        <p>98Rovig St, Big city picu 23456</p>
                                    </div>
                                </div>
                            </div>

                                <h5 className="social-media-tit">
                                Social Media
                                </h5>

                                <div className="social-medias-wrap">
                                    <a href="#" target='_blank'>
                                        <img src={Facebook} alt="" />
                                    </a>
                                    <a href="#" target='_blank'>
                                        <img src={Instagram} alt="" />
                                    </a>
                                    <a href="#" target='_blank'>
                                        <img src={YouTube} alt="" />
                                    </a>
                                    <a href="#" target='_blank'>
                                        <img src={X} alt="" />
                                    </a>
                                </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default ContactUs