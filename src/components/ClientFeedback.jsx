import ProfilePic1 from '../assets/Home/ClientFeedback/profile-pic.svg'
import ProfilePic2 from '../assets/Home/ClientFeedback/profile2.svg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

const ClientFeedback = () => {
  return (
    <>
    <section className="client-feedback-sec">
        <div className="container">
            <div className="row">
              <div className="col-lg-3">
    <div className="client-feedback-tit-wrap">
      <h3 className="client-feedback-main-tit">What Our Partners Say? </h3>

      <p>We reached out to our partners to hear their thoughts on our services. Here’s what they had to share about their experience with us.</p>
    </div>
              </div>

                <div className="col-lg-9">
                    <div className="client-feedback-swiper-wrap">
        <Swiper
          direction={'vertical'}
          scrollbar={{
          hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
          >
         <SwiperSlide>
          <div className="client-feedback-swiper-inner-card">
           <div className="row">
             <div className="col-6">
             <div className="client-feedback-swiper-inner-card-first-half">
                 <div className="row">
                    <div className="col-12">
                       <div className="client-feedback-swiper-card-1">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-2">
                     <p>"From Ignite Labs to placement training, Industro Ventures equipped me with skills 
                     that  landed me a top-tier role in cybersecurity. Their mentorship is unmatched."</p>
                       <span>— Student Name,</span>
                       <span>Cybersecurity Specialist</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>        
                     </div>
                    </div>
                 </div>
             </div>
             </div>
               <div className="col-6">
               <div className="col-12">
                       <div className="client-feedback-swiper-card-3">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-4">
                     <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>        
                     </div>
                    </div>
               </div>
           </div>
          </div>
         </SwiperSlide>
        <SwiperSlide><div className="client-feedback-swiper-inner-card">
           <div className="row">
             <div className="col-6">
             <div className="client-feedback-swiper-inner-card-first-half">
                 <div className="row">
                    <div className="col-12">
                       <div className="client-feedback-swiper-card-1">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-2">
                     <p>"From Ignite Labs to placement training, Industro Ventures equipped me with skills 
                     that  landed me a top-tier role in cybersecurity. Their mentorship is unmatched."</p>
                       <span>— Student Name,</span>
                       <span>Cybersecurity Specialist</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>        
                     </div>
                    </div>
                 </div>
             </div>
             </div>
               <div className="col-6">
               <div className="col-12">
                       <div className="client-feedback-swiper-card-3">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-4">
                     <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>        
                     </div>
                    </div>
               </div>
           </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="client-feedback-swiper-inner-card">
           <div className="row">
             <div className="col-6">
             <div className="client-feedback-swiper-inner-card-first-half">
                 <div className="row">
                    <div className="col-12">
                       <div className="client-feedback-swiper-card-1">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-2">
                     <p>"From Ignite Labs to placement training, Industro Ventures equipped me with skills 
                     that  landed me a top-tier role in cybersecurity. Their mentorship is unmatched."</p>
                       <span>— Student Name,</span>
                       <span>Cybersecurity Specialist</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>        
                     </div>
                    </div>
                 </div>
             </div>
             </div>
               <div className="col-6">
               <div className="col-12">
                       <div className="client-feedback-swiper-card-3">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-4">
                     <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>        
                     </div>
                    </div>
               </div>
           </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="client-feedback-swiper-inner-card">
           <div className="row">
             <div className="col-6">
             <div className="client-feedback-swiper-inner-card-first-half">
                 <div className="row">
                    <div className="col-12">
                       <div className="client-feedback-swiper-card-1">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-2">
                     <p>"From Ignite Labs to placement training, Industro Ventures equipped me with skills 
                     that  landed me a top-tier role in cybersecurity. Their mentorship is unmatched."</p>
                       <span>— Student Name,</span>
                       <span>Cybersecurity Specialist</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>        
                     </div>
                    </div>
                 </div>
             </div>
             </div>
               <div className="col-6">
               <div className="col-12">
                       <div className="client-feedback-swiper-card-3">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-4">
                     <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>        
                     </div>
                    </div>
               </div>
           </div>
          </div></SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>

{/* <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </>
  )
}

export default ClientFeedback