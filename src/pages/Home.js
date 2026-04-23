import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Assets imports (all from ../assats/)
import logo from '../assats/Rectangle 3.png';
import line1 from '../assats/line1.png';
import line2 from '../assats/line2.png';
import car1 from '../assats/car1.png';
import icon from '../assats/icon.png';
import frame28 from '../assats/Frame 28.png';
 
import group98 from '../assats/Group 98.png';
import blackCar from '../assats/black car.png';
import iconCarpool from '../assats/icons8-carpool-30 1.png';
import img1 from '../assats/img1.png';
import img2 from '../assats/img2.png';
import img3 from '../assats/img3.png';
import img4 from '../assats/img4.png';
import img5 from '../assats/img5.png';
import img6 from '../assats/img6.png';
import img7 from '../assats/img7.png';
import img8 from '../assats/img8.png';
import img9 from '../assats/img9.png';
import img10 from '../assats/img10.png';
import img11 from '../assats/img11.png';
import icon5 from '../assats/icon5.png';
import card1 from '../assats/card1.png';
import card2 from '../assats/card2.png';
import card3 from '../assats/card3.png';
import card4 from '../assats/card5.png';

export default function Home() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
      window.bootstrap = bootstrap.default || bootstrap;
    });
  }, []);

  const serviceCard = (index) => (
    <div className="card shadow-sm">
      <div className="position-relative">
        <img src={frame28} className="card-img-top w-100" alt="Service" />
        <button className="btn btn-light position-absolute top-0 end-0 mt-2 me-2">&times;</button>
      </div>
      <div className="p-3">
        <h5>Various versions have</h5>
        <div className="d-flex mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-warning me-1" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386 .198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888 .283-.95l4.898-.696L7.538 .792c.197-.39 .73-.39 .927 0l2.184 4.327 4.898 .696c.441 .062 .612 .636 .282 .95l-3.522 3.356 .83 4.73c.078 .443-.36 .79-.746 .592L8 13.187l-4.389 2.256z"/>
          </svg>
          <span className="text-warning">5.0</span>
          <span className="ms-2">(15)</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h1 className="text-danger">$ 500</h1>
          
        </div>
      </div>
    </div>
  );

  const exploreItem = (
    <>
      <img src={iconCarpool} alt="" />
      <div>
        <b>Intercity Rides</b>
        <p>Get a car wherever and whenever you need it with your <br /> iOS or Android device.</p>
      </div>
    </>
  );

  const testimonial = (img, name) => (
    <div className="mycard1">
      <img src={icon5} className="ms-4 mt-5" alt="" />
      <p className="mt-5 p-3">There are of Lorem Ipsum available, but the majority have suffered alteration in some form...</p>
      <div className="d-flex">
        <img src={img} className="w-25" alt="" />
        <div className="ms-3">
          <b>{name}</b>
          <p>Junior Lawyer</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Navbar */}
      <div className="container-fluid" style={{backgroundColor: '#FFEDCB', minHeight: '100vh'}}>
        <div className="container p-4">
          <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <div className="d-flex">
                  <button type="button" className="btn btn-danger me-3">Book your ride</button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe2 text-danger me-2" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335 .82-1.887 1.855-.215 .403-.395 .872 .705 .157 1.472 .257 2.282 .287zM4.249 3.539 .214-.577 .481 -1.078 .597 -.933 3.051 3.05 .544 .277 1.198 .49zM3.509 7.5 .036 -1.07 .188 -2.087 .436 -3.008 -1.565 -.667 1.018 7.5z" />
                  </svg>
                  <button className="btn btn-outline-secondary me-2">English</button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check text-danger" viewBox="0 0 16 16">
                    <path d="M10.97 4.97 .75 .75 1.07 1.05 -3.99 4.99 .75 .75 -1.08 .02 4.324 8.384 .75 .75 1.06 -1.06 2.094 2.093 3.473 -4.425z"/>
                  </svg>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero */}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mt-5">
                <div className="hero-title">
                  <h1 className="fontsize">
                    <span className="colorstyle">Discover</span> the BEST <br />
                    Lovely 
                    <span className="place-wrap">
                      Place.
                      <img src={line2} className="img-fluid hero-line" alt="" />
                    </span>
                  </h1>
                </div>
                <p className="color1 mt-4 p-2">
                  Get a car wherever and whenever you need it with <br /> your iOS or Android device.
                </p>
                <button type="button" className="btn btncolor mt-4">Book your ride</button>
              </div>
              <div className="col-lg-6 mt-5 text-center">
                <img src={car1} className="img-fluid w-100" alt="Car" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Boxes */}
      <div className="container my-5">
        <div className="row g-4">
          {[
            'City Rides',
            'Outstation',
            'Airport Pickup'
          ].map((text, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-12">
              <div className="d-flex align-items-center boxdesign">
                <img src={icon} className="img-fluid me-3 icon-size" alt="" />
                <p className="mb-0 fw-semibold">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Most Popular Services */}
      <div className="container-fluid color8 py-5">
        <div className="row">
          <div className="col-lg-3 col-md-3 mt-5">
            <h1 className="ms-5 mt-5">Most Popular Services</h1>
            <img src={line1} className="ms-5 mb-5 img-fluid" alt="" />
          </div>
          <div className="col-lg-9">
            <div className="row">
              {[0,1,2].map(i => (
                <div key={i} className="col-lg-4 mt-4">
                  {serviceCard(i)}
                </div>
              ))}
            </div>
            <div className="text-end mb-5">
              <button className="btn btn-secondary me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-chevron-compact-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M6.776 1.553a.5 .5 0 0 1 .671 .223l3 6a.5 .5 0 0 1 0 .448l-3 6a.5 .5 0 1 1 -.894 -.448L9.44 8 6.553 2.224a.5 .5 0 0 1 .223 -.671z"/></svg>
              </button>
              <button className="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-chevron-compact-left" viewBox="0 0 16 16"><path fillRule="evenodd" d="M9.224 1.553a.5 .5 0 0 1 .223 .67L6.56 8l2.888 5.776a.5 .5 0 1 1 -.894 .448l-3-6a.5 .5 0 0 1 0 -.448l3-6a.5 .5 0 0 1 .67 -.223z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Explore more */}
      <div className="container mt-5">
        <div className="text-center">
          <h1>Explore more with Us</h1>
          <img src={line1} className="mb-5 mx-auto d-block" alt="" style={{maxWidth: '200px'}} />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={group98} className="mt-5 w-100" alt="" />
          </div>
          <div className="col-lg-6 p-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="d-flex mt-5">
                <div className="mt-2 me-4">
                  <img src={iconCarpool} alt="" />
                </div>
                {exploreItem}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container-fluid mt-5" style={{backgroundColor: '#FFEDCB', height: 'auto', padding: '50px 0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <h1>Stay updated with <br /> our services.</h1>
              <p>Get a car wherever and whenever you need it with your iOS or Android device.</p>
              <div className="btn-group w-100" role="group">
                <input type="email" className="form-control" placeholder="Your Email" />
                <button className="btn btn-danger">Subscribe</button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 text-center">
              <img src={blackCar} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="container">
        <div className="text-center mt-5">
          <h1>Stay updated with<br /> our services.</h1>
          <img src={line1} className="mb-5 mx-auto d-block" alt="" style={{maxWidth: '200px'}} />
        </div>
        <div className="row g-4">
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((src, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-6">
              <img src={src} className="w-100" alt="" />
              <div className="text-center">
                <p>Ride</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mt-5">
        <div className="text-center">
          <h1>Client Opinions & Reviews</h1>
          <img src={line2} className="mb-5 mx-auto d-block" alt="" style={{maxWidth: '200px'}} />
        </div>
        <div className="row">
          <div className="col-lg-4">{testimonial(img9, 'Nattasha')}</div>
          <div className="col-lg-4">{testimonial(img10, 'Nattasha')}</div>
          <div className="col-lg-4">{testimonial(img11, 'Nattasha')}</div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="mycard2 text-center p-5 mx-auto" style={{maxWidth: '600px'}}>
              <h2>Get Started Now!</h2>
              <p className="wordcolor mt-3">
                Get a car wherever and whenever you need it with <br /> your iOS or Android device
              </p>
              <input type="text" className="form-control custom-input mb-3 w-75 mx-auto" placeholder="Full Name" />
              <input type="email" className="form-control custom-input mb-3 w-75 mx-auto" placeholder="E-mail" />
              <button className="btn btn-danger w-50 mt-3 mb-2">Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-fluid herosection2 mt-5 py-5" style={{backgroundColor: '#dark-color'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="p-4">
                <h4>Contact Us</h4>
                <p>Call : +123 400 123</p>
                <p>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
                <h6>Email: example@mail.com</h6>
                <div>
                  <img src={card1} width="25" alt="" className="me-1" />
                  <img src={card2} width="25" alt="" className="me-1" />
                  <img src={card3} width="25" alt="" className="me-1" />
                  <img src={card4} width="25" alt="" className="me-1" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 p-4">
              <h3>Explore</h3>
              <p>Home</p><p>About</p><p>Course</p><p>Services</p>
            </div>
            <div className="col-lg-2 p-4">
              <h3>Category</h3>
              <p>Design</p><p>Development</p><p>Marketing</p>
            </div>
            <div className="col-lg-4 p-4">
              <h3>Subscribe</h3>
              <p className="mt-3">Lorem Ipsum has been them an industry printer took a galle.</p>
              <input type="email" className="form-control mt-4 backcolor" placeholder="Email here" />
            </div>
          </div>
          <div className="text-center mt-4">
            <hr />
            <p>Copyright 2020 All rights Reserved . Null</p>
          </div>
        </div>
      </div>
    </>
  );
}
