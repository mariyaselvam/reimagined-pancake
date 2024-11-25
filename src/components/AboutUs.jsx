
import TopImg from "../assets/Home/about-us/about-us-top.svg"
import CenterImg from "../assets/Home/about-us/about-us-center.png"
import BottomImg from "../assets/Home/about-us/about-us-bottom.png"

const AboutUs = () => {
  return (
    <>
    <section className="about-us-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                   <div className="about-us-hole-content">
                    <span className="about-us-mini-tit">
                    About Us
                    </span>
                    <h2 className="about-us-main-tit">
                    At Industro Ventures, we believe
                    education isn’t just about learning
                    </h2>

                    <p className="about-us-para">
                    It’s about  transformation. From groundbreaking digital infrastructures to passion-driven  communities, we’re redefining how education connects with industry. Our mission? To  build pathways where students excel, institutions thrive, and innovation takes the lead.
                    </p>

                    <div className="about-visition-nd-misition">
                        <div className="about-visition-nd-misition-card">
                            <h4 className="about-visition-tit">
                            Our Vision
                            </h4>
                            <p className="about-visition-nd-misition-para">To empower the next generation with skills, tools, and environments that  drive success and innovation.</p>
                        </div>
                        <div className="about-visition-nd-misition-card">
                            <h4 className="about-mistion-tit">
                            Our Vision
                            </h4>
                            <p className="about-visition-nd-misition-para">To empower the next generation with skills, tools, and environments that  drive success and innovation.</p>
                        </div>
                    </div>

                    <a className="about-us-btn" href="">
                    Read More
                    </a>
                </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-us-main-imgs-wrap">
                        <div className="about-us-main-imgs-cont">
                            <img width="67" height="67" src={TopImg} alt="" />

                            <span>Innovative
                            Ecosystems</span>
                        </div>

                        <div className="about-us-main-center-img">
                           <img src={CenterImg} alt="" />
                        </div>
                        
                        <div className="about-us-main-buttom-img">
                             <img width="388" height="222" src={BottomImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs