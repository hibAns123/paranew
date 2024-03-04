import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Container, Navbar, Card } from 'react-bootstrap'
import ImageSlider from "./ImageSlider";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
      setOffsetX(window.pageXOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div>
      <Navbar className=" w-100%" style={{ backgroundColor: '--bs-dark', }}>
        <Container>
          <img style={{ width: '100px', marginRight: '400px' }} src="logo.png" alt="" />          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className='.d-flex'>
              <a style={{ textDecoration: 'none', marginRight: '70px', color: 'black' }} href="#login">HOME</a>

              <a style={{ textDecoration: 'none', marginRight: '70px', color: 'black' }} href="#login">ABOUT</a>

              <a style={{ textDecoration: 'none', marginRight: '70px', color: 'black' }} href="#login">FEATURES</a>

              <a style={{ textDecoration: 'none', marginRight: '70px', color: 'black' }} href="#login">OFFERS</a>

              <a style={{ textDecoration: 'none', marginRight: '70px', color: 'black' }} href="#login">CONNECTION</a>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="containers d-flex">
        <div className="im1"><div className="parallax_txt para" style={{ transform: `translateY(-${offsetY * 3.5}px)`, margin: '150px 100px' }}>
          <h1 style={{ fontWeight: 'bolder', fontSize: '50px' }}>LUXURY LIFESTYLE RENTALS</h1>

          <p style={{ fontSize: '20px', width: '500px' }}>Welcome to our premier car rental service, where your journey begins with convenience, comfort, and confidence. Explore our fleet of vehicles, handpicked to elevate your travel experience. </p>
          <button style={{ padding: '5px', fontSize: '10px', width: '100px' }}>EXPLORE NOW</button>
        </div></div>
        <div className="im1"> <div
          className="Parallax__car para"
          style={{
            transform: `translate(-${offsetX * 2.5}px, ${offsetY * 0.5}px)`
          }} /></div>
      </div>
      <div className="logo row" style={{ marginLeft: '90px', }}>
        <div className="col" style={{ marginRight: '-90px' }}><img src="1.png" alt="" /></div>
        <div className="col" style={{ marginRight: '-90px' }}><img src="2.png" alt="" /></div>
        <div className="col" style={{ marginRight: '-90px' }}><img src="3.png" alt="" /></div>
        <div className="col" style={{ marginRight: '-90px' }}><img src="5.png" alt="" /></div>
        <div className="col" style={{ marginRight: '-90px' }}><img src="6.png" alt="" /></div>
        <div className="col" style={{ marginRight: '-90px' }}><img src="8.png" alt="" /></div>
        <div className="col" style={{ marginRight: '-90px' }}><img src="9.png" alt="" /></div>
      </div>

      <section>
        <h1 style={{ textAlign: 'center', fontWeight: 'bolder', margin: '100px 0px 20px 0px' }}>HOW IT WORKS</h1>
        <h5 style={{textAlign:'center'}}>Discover how simple it is to book your perfect car and hit the road hassle-free.</h5>
        <div style={{ margin: '100px 100px 100px 100px' }} className="rgo row">
          <div className="col">
            <Card style={{ width: '18rem',padding:'15px', border:'0px',boxShadow: '0 10px 10px 0 rgba(0,0,0,0.3)'  }}>
              <i style={{ textAlign: 'center' }} class="fa-solid fa-location-pin fs-1"></i>      <Card.Body>
                <Card.Title style={{textAlign:'center',fontWeight:'bolder'}}>Choose A Location</Card.Title>
                <Card.Text  style={{textAlign:'justify',width:'230px'}}>
                Select your preferred destination and let  exploration begin.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: '18rem' ,padding:'15px', border:'0px',boxShadow: '0 10px 10px 0 rgba(0,0,0,0.3)' }}>
              <i style={{ textAlign: 'center' }} class="fa-solid fa-calendar-days fs-1"></i>      <Card.Body>
                <Card.Title style={{textAlign:'center',fontWeight:'bolder'}}>Pick Your Date</Card.Title>
                <Card.Text  style={{textAlign:'justify',width:'230px'}}>
                Choose your travel dates and embark on your next adventure.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: '18rem' ,padding:'15px', border:'0px',boxShadow: '0 10px 10px 0 rgba(0,0,0,0.3)' }}>

              <i style={{ textAlign: 'center' }} class="fa-solid fa-bookmark fs-1"></i>             <Card.Body>
                <Card.Title style={{textAlign:'center',fontWeight:'bolder'}}>Pick Your Date</Card.Title>
                <Card.Text  style={{textAlign:'justify',width:'230px'}}>
                Secure your ride and start your journey with ease.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <section>

        <div className="sec row" style={{ height: '400px',margin:'0px 100px 100px 0px' }}>
          <div className="col-6"><img style={{ width: '650px', height: '700px', marginTop:'-200px', marginLeft:'50px', }} src="car1.png" alt="" /></div>
          <div className="col-6" style={{paddingLeftLeft:'100px'}}>
            <p>OUR SERVICES</p>
            <h1 style={{fontWeight:'bolder'}}>Feel The Best <br />
            Experience With Our
            <br /> Rental Deals</h1>
            <hr />
            <div className="row">
              <div className="col"><i class="fa-solid fa-person-walking-luggage fs-2"></i></div>
              <div style={{marginLeft:'-600px'}} className="col"><h5>Deals for every budget</h5></div>
            </div>
            <br />
            <div className="row">
              <div className="col"><i class="fa-solid fa-award fs-2"></i></div>
              <div style={{marginLeft:'-600px'}} className="col"><h5>Best Price Guaranteed</h5></div>
            </div>
            <br />
            <div className="row">
              <div className="col"><i class="fa-solid fa-phone fs-2"></i></div>
              <div style={{marginLeft:'-600px'}} className="col"><h5>Support 24/7</h5></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="caption d-flex" style={{margin:'0px 100px'}}>
          <h1 style={{marginRight:'-100px'}}>TODAYS SPECIAL</h1>
          <div className="d-flex" style={{marginLeft:'-400px'}}>
            <button style={{padding:'10px -20px',marginRight:'10px',width:'150px'}}>LUXURY</button>
            <button style={{padding:'10px -10px',marginRight:'10px',width:'150px'}}> SPORTSCAR</button>
            <button style={{padding:'10px -10px',marginRight:'10px',width:'150px'}}>VINTAGE</button>
            <button style={{padding:'10px',marginRight:'10px',width:'150px'}}>BUDGET</button>
            <button style={{padding:'10px 10px',marginRight:'100px',width:'150px'}}>View All</button>
          </div>
          
        </div>
      </section>
      <ImageSlider />
      <footer style={{ backgroundColor: 'black', marginBottom: '-100px' }}>
        <div className="row" style={{ margin: '100px 100px', padding: '100px 20px' }}>
          <div className="col" ><img style={{ width: '200px' }} src="L2.png" alt="" /></div>
          <div className="col row" style={{marginLeft:"-650px"}}>
            <div className="col"><h4>ABOUT</h4>
            <br />
              <p>How It Works </p>
              <p>About Us</p></div>
            <div className="col" style={{marginLeft:'-150px'}}>
              <h4 >SUPPORT</h4>
              <br />
              <p>Booking Support</p>
              <p>Help Center</p>
            </div>
            <div className="col" style={{marginLeft:'-150px'}}>
              <h4>Social Connections</h4>
              <br />
              <div className="row">
                <div className="col" style={{marginRight:'-50px'}}><i class="fa-brands fa-instagram"></i></div>
                <div className="col" style={{marginRight:'-50px'}}><i class="fa-brands fa-facebook"></i></div>
                <div className="col"><i class="fa-brands fa-youtube"></i></div>

              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;