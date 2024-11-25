import CardImg1 from '../assets/Home/Think-we-do/what-we-do-icon-1.svg'
import CardImg2 from '../assets/Home/Think-we-do/what-we-do-icon-2.svg'
import CardImg3 from '../assets/Home/Think-we-do/what-we-do-icon-3.svg'
import CardImg4 from '../assets/Home/Think-we-do/what-we-do-icon-4.svg'
import CardImg5 from '../assets/Home/Think-we-do/what-we-do-icon-5.svg'

const WhatWeDo = () => {
  return (
    <>
    <section className="what-we-do-sec">
        <div className="container">
            <div className="row">
               <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-tit-wrap">
                        <h3 className="what-we-main-do">
                        Think we do
                        </h3>

                        <p className="what-we-main-para">
                        Transforming Learning into Leadership Through Career, Corporate, and Industry Opportunities.
                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg1} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Career Development & Placement
                            Training
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Unlock potential through cutting-edge programs in AI/ML, Cybersecurity, Data  Analytics, IoT, and beyond. With a curriculum built by industry leaders, we  ensure students don’t just meet market demands — they redefine them.</p>

                        <span className="what-we-do-card-span" >Explore Career Training </span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg2} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Corporate Training
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Stay ahead of the curve with training solutions designed for professionals and  enterprises. From Kubernetes to advanced Python, we help businesses thrive in  today’s fast-paced tech landscape.</p>

                        <span className="what-we-do-card-span" >Upskill Your Workforce </span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg3} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Ignite Hubs & Ignite Labs
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Transform education with industry-specific communities and labs. Our spaces  foster collaboration, innovation, and real-world problem-solving, preparing  students to lead.</p>

                        <span className="what-we-do-card-span" >Discover Ignite Labs </span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg4} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Campus 360 Solutions
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Reimagine your campus with state-of-the-art ERP systems, digital classrooms,  and curriculum designs that rival the best. From Tier 2 to Tier 3 institutions, we  elevate standards to global benchmarks.</p>

                        <span className="what-we-do-card-span">Transform Your Campus</span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg5} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Internship Opportunities
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Bridge the gap between academics and industry with our exclusive internship  programs. Experience real-world projects, expert mentorship, and career defining opportunities.</p>

                        <span className="what-we-do-card-span" >Kickstart Your Career </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhatWeDo