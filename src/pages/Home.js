 import React from 'react';
 import thum1 from '../assats/Rectangle 3.png'
 import thum2 from '../assats/line1.png'
 import thum3 from '../assats/car1.png'
 import thum4 from '../assats/icon.png'
 import png1 from '../assats/line1.png'
 import png2 from '../assats/Frame 28.png'
 import png3 from '../assats/Frame 28.png'
 import png4 from '../assats/line1.png'
 import png5 from '../assats/line1.png'
  
 export default function Home() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#FFEDCB", height: "100vh" }}>
        <div className="container p-4">
          <nav className="navbar navbar-expand-lg bg-body-tertiary p-1">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={thum1} className='p-2 w-100' alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>

                <form>
                  <button type="button" className="btn btn-danger me-5">Book your ride</button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe2 text-danger ms-4 my-4" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0..." />
                  </svg>
                  <button className="btn" type="submit"> English</button>
                </form>
              </div>
            </div>
          </nav>

          <div className="container position-relative">
            <div className="row">
              <div className="col-6 mt-5">
                <h1 className="fontsize">
                  <span className="colorstyle">Discover</span> the BEST <br />
                  Lovely Place.
                </h1>
                <img className="setline" src={thum2} alt="" />
                <p className="color1 mt-4 p-2">
                  Get a car wherever and whenever you need it with <br /> your iOS or Android device.
                </p>
                <button type="button" className="btn btncolor mt-4">Book your ride</button>
              </div>

              <div className="col-6 mt-5">
                <img src={thum3} alt="care img" />
              </div>
            </div>
          </div>

        </div>
      </div>
       <div className="container position-relative">
        <div className="row">
          <div className="col-lg-4 my-5">
            <div className="d-flex mt-4 boxdizine1">
              {/* <img src="assate/icon.png" className=" p-4 ms-5" alt=""> */}
              <img src={thum4} alt="care img" className=' p-4 ms-5'   />
              <p className="m-5">City Rides</p>
            </div>
          </div>
          <div className="col-lg-4 my-5">
            <div className="d-flex mt-4 boxdizine1">
              {/* <img src="assate/icon.png" className=" p-4 ms-5" alt=""> */}
               <img src={thum4} alt="care img" className=' p-4 ms-5'   />
              <p className="m-5">City Rides</p>
            </div>
          </div>
          <div className="col-lg-4 my-5">
            <div className="d-flex mt-4 boxdizine1">
              {/* <img src="assate/icon.png" className=" p-4 ms-5" alt=""> */}
               <img src={thum4} alt="care img" className=' p-4 ms-5'   />
              <p className="m-5">City Rides</p>
            </div>
          </div>
        </div>
      </div>

      {/* ------services section end------ */}
    <div className="container-fluid color8 py-5">
  <div className="container pt-4">
    <div className="row align-items-start">

      {/* Left Section (Heading + Image) */}
    <div className="col-lg-3 col-md-12 mb-4 text-center text-lg-start">
      <div className="mt-5 pt-5">
      <h3 className='ms-5 mb-3'><b>Most</b>  </h3>
       <h1 className="heading-anim">
        <span className="anim-text">Popular Services</span>
      </h1>

      </div>

  
</div>


      {/* Card Reusable Component Applied for All Cards */}
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
          <div
            className="card shadow-lg border-0 rounded-4 w-100 h-100 hover-card"
            style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
          >
            <img src={png2} className="card-img-top rounded-top" alt="Service" />
            <div className="card-body">
              <h5 className="fw-semibold">Various versions have</h5>
              <div className="d-flex align-items-center mt-2">
                <div className="text-warning fs-5">★★★★★</div>
                <small className="ms-2 text-muted">(15)</small>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="text-primary fw-bold">$500</h4>
                <div className="btn-group">
                  <button className="btn btn-sm btn-outline-primary px-3">View</button>
                  <button className="btn btn-sm btn-outline-secondary px-3">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</div>


    </>
  );
}
