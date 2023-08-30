import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
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
              src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Slide 1"
              style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://t3.ftcdn.net/jpg/01/66/72/88/360_F_166728814_vCfWKOcbU7zhSqZI31KyI9nXzDzqAHNv.jpg"
              alt="Slide 2"
              style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.jpg?s=612x612&w=0&k=20&c=w1zX61Nw0p3aguqUj9FFrUV9hl8l67zut_ZhdnB9p-E="
              alt="Slide 3"
              style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://www.kenresearch.com/blog/wp-content/uploads/2017/02/Global-ICT-Industry.jpg"
              alt="Slide 4"
              style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
            />
          </div>
        </Slider>
      </div>

      <div className='content-container'>

        <h2 style={{ textAlign: 'center' }}>WHY TURINS BYLATECH TECHNOLOGIES?</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Kenya is fast emerging as a key destination of the IT sector. Turins is a new generation company. In this scenario, TURINS BYLATECH TECHNOLOGIES has experienced dedicated teams, combining business and industry knowledge with technology, who work closely with clients to produce comprehensive products.
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h4 style={{ textAlign: 'center' }}>
            Our Services and product are designed with a focus on stable and reliable business systems because:
            </h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>TURINS BYLATECH TECHNOLOGIES carries out customer requirements through a sequence of well-defined steps.</li>
                <li>Avoid the Risk.</li>
                <li>Following Conceptual integrity.</li>
                <li>Process control.</li>
                <li>Inspection and testing.</li>
                <li>Product cost and quality.</li>
                <li>On time delivery.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
