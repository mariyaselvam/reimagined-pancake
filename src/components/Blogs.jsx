import CardImg1 from "../assets/Home/BlogCardHomeListing/blog-listing-card1.png"
import CardImg2 from "../assets/Home/BlogCardHomeListing/blog-listing-card2.png"
import CardImg3 from "../assets/Home/BlogCardHomeListing/blog-listing-card3.png"
import CardImg4 from "../assets/Home/BlogCardHomeListing/blog-listing-card4.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import required modules
// import { Pagination } from 'swiper/modules';

const Blogs = () => {
  return (
    <>
    <section className="blog-listing-card-home-sec">
        <div className="conatiner-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="blog-listing-card-sec-main-tit">
                    Our Latest Blogs
                    </h3>
                    <div className="blog-listing-cars-wrap">
                <Swiper
                      slidesPerView={'auto'}
                      centeredSlides={true}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                    //   modules={[Pagination]}
                      className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg1} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Unlocking Futures: Career
                                Development & Placement Training</h4>

                                <p>Lorem ipsum dolor sit amet. Cum fugit modi qui illum quas sit laborum omnis qui ducimus aperiam. Ea error velit ut earum ducimus ...</p>

                                <a className="blog-listing-card-btn" href="">Read Blog</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg2} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Upskill to Lead: Corporate Training
                                for Professionals</h4>

                                <p>Lorem ipsum dolor sit amet. Cum fugit modi qui illum quas sit laborum omnis qui ducimus aperiam. Ea error velit ut earum ducimus ...</p>

                                <a className="blog-listing-card-btn" href="">Read Blog</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg3} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Upskill to Lead: Corporate Training
                                for Professionals</h4>

                                <p>Lorem ipsum dolor sit amet. Cum fugit modi qui illum quas sit laborum omnis qui ducimus aperiam. Ea error velit ut earum ducimus ...</p>

                                <a className="blog-listing-card-btn" href="">Read Blog</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg4} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Unlocking Futures: Career
                                Development & Placement Training</h4>

                                <p>Lorem ipsum dolor sit amet. Cum fugit modi qui illum quas sit laborum omnis qui ducimus aperiam. Ea error velit ut earum ducimus ...</p>

                                <a className="blog-listing-card-btn" href="">Read Blog</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg1} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Unlocking Futures: Career
                                Development & Placement Training</h4>

                                <p>Lorem ipsum dolor sit amet. Cum fugit modi qui illum quas sit laborum omnis qui ducimus aperiam. Ea error velit ut earum ducimus ...</p>

                                <a className="blog-listing-card-btn" href="">Read Blog</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg2} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Upskill to Lead: Corporate Training
                                for Professionals</h4>

                                <p>Lorem ipsum dolor sit amet. Cum fugit modi qui illum quas sit laborum omnis qui ducimus aperiam. Ea error velit ut earum ducimus ...</p>

                                <a className="blog-listing-card-btn" href="">Read Blog</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg3} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Upskill to Lead: Corporate Training
                                for Professionals</h4>

                                <p>Lorem ipsum dolor sit amet. Cum fugit modi qui illum quas sit laborum omnis qui ducimus aperiam. Ea error velit ut earum ducimus ...</p>

                                <a className="blog-listing-card-btn" href="">Read Blog</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg4} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Unlocking Futures: Career
                                Development & Placement Training</h4>

                                <p>Lorem ipsum dolor sit amet. Cum fugit modi qui illum quas sit laborum omnis qui ducimus aperiam. Ea error velit ut earum ducimus ...</p>

                                <a className="blog-listing-card-btn" href="">Read Blog</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blogs