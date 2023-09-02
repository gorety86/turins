import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'

export default function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: i === 0 ? 'white' : 'gray',
          }}
        />
      );
    },
    dotsClass: 'slick-dots',
    className: 'slider',
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Slide 1"
              style={{ width: '100%', maxHeight: '800px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://t3.ftcdn.net/jpg/01/66/72/88/360_F_166728814_vCfWKOcbU7zhSqZI31KyI9nXzDzqAHNv.jpg"
              alt="Slide 2"
              style={{ width: '100%', maxHeight: '800px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Slide 3"
              style={{ width: '100%', maxHeight: '800px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              alt="Slide 4"
              style={{ width: '100%', maxHeight: '800px', objectFit: 'cover' }}
            />
          </div>
        </Slider>
      </div>

      <div className='content-container'>
      <div className='content-wrapper'>
          <div className='text-column'>
        <h2 style={{ textAlign: 'center',  textDecoration: 'underline'}}>WHY TURINS BYLATECH TECHNOLOGIES LTD?</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>Kenya is fast emerging as a key destination of the IT sector. Turins is a new generation </p>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>Company. In this scenario, TURINS BYLATECH TECHNOLOGIES has experienced </p>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>dedicated teams, combining business and industry knowledge with technology, </p>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}> who work closely with clients to produce comprehensive product,</p>
          </div>
          <div className='image-column'>
            <img
              src="data:image/jpeg;base64,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"
              alt="Image"
              style={{ maxWidth: '100%', maxHeight: '200px', height: 'auto' }}
              />
          </div>
          </div>
          <div class="card-container">
  <h4 class="card-title">
    Our Services and product are designed with a focus on stable and reliable business systems
    because:
  </h4>
  <ul class="card-list">
    <li>TURINS BYLATECH TECHNOLOGIES carry out customer requirements through
      some sequence of well defined steps.</li>
    <li>Avoid the Risk.</li>
    <li>Follow Conceptual integrity.</li>
    <li>Process control.</li>
    <li>Inspection and testing.</li>
    <li>Product Cost and quality.</li>
    <li>On-time Delivery.</li>
  </ul>
</div>

        </div>
      </div>
  );
}