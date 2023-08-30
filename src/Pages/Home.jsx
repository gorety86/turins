// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function LandingPage() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     customPaging: function (i) {
//       return (
//         <div
//           style={{
//             width: '10px',
//             height: '10px',
//             borderRadius: '50%',
//             background: i === 0 ? 'white' : 'gray',
//           }}
//         />
//       );
//     },
//     dotsClass: 'slick-dots',
//     className: 'slider',
//   };

//   return (
//     <div>
//       <div className="slider-container">
//         <Slider {...settings}>
//           <div>
//             <img
//               src="https://static.wixstatic.com/media/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_1905,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg"
//               alt="Slide 2"
//               style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://static.wixstatic.com/media/4a7193_3d46254f0abd4093a0a93f8d6567d090~mv2.jpg/v1/fill/w_1251,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Enrogue%20Interior_CGI%20%20(3b).jpg"
//               alt="Slide 3"
//               style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
//             />
//           </div>
//         </Slider>
//       </div>

//       <div className='content-container'>

//         <h2 style={{ textAlign: 'center' }}>WHY TURINS BYLATECH TECHNOLOGIES LTD?</h2>
//         <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
//           Kenya is fast emerging as a key destination of IT sector. Turins' is a new Generation Company. In this scenario TURINS BYLATECH TECHNOLOGIES has experienced dedicated teams, combining business and industry, knowladge with technology, who works closely with clients to produce comprehensive product.
//         </p>

//         <p2 style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
//           Our services and product are designed with a focus on stable and reliable business systems because:
//               TURINS BYLATECH TECHNOLOGIES carry out customer requirements through some sequence of well  defined steps.
//               Avoid the Risk.
//               Follow Conceptual integrity.
//               Process control.
//               Inspection and testing.
//               Product cost and quality.
//         </p2>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
              src=""
              alt="Slide 1"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src=""
              alt="Slide 2"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src=""
              alt="Slide 3"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src=""
              alt="Slide 3"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
        </Slider>
      </div>

      <div className='content-container'>

        <h2 style={{ textAlign: 'center' }}>WHY TURINS BYLATECH TECHNOLOGIES LTD?</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Kenya is fast emerging as a key destination of the IT sector. Turins is a new generation company. In this scenario, TURINS BYLATECH TECHNOLOGIES has experienced dedicated teams, combining business and industry knowledge with technology, who work closely with clients to produce comprehensive products.
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h4 style={{ textAlign: 'center' }}>
            Our Services and product are designed with a focus on stable and reliable business systems because:
            </h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>TURINS BYLATECH TECHNOLOGIES carries out customer requirements through a sequence of well-defined steps.</li>
                <li>Avoids risks by following conceptual integrity.</li>
                <li>Emphasizes process control.</li>
                <li>Includes inspection and testing processes.</li>
                <li>Ensures product cost and quality are optimized.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
