
import Carousel from 'react-bootstrap/Carousel';

function ImageSlider() {
    return(
    <div className='row'>
       <div className='col'>
            <Carousel style={{width:'600px', height:'300px',display:'flex', justifyContent:'center',alignItems:'center', margin:'100px 100px'}}>
            <Carousel.Item>
             <img  style={{height:'300px',width:'550px'}}  src="cr1 (2).png" alt="" />
              
            </Carousel.Item>
            <Carousel.Item>
            <img  style={{height:'300px',width:'550px'}} src="cr1 (1).png" alt="" />
        
             
            </Carousel.Item>
            <Carousel.Item>
            <img  style={{height:'300px',width:'550px'}} src="cr1 (6).png" alt="" />
        
            
            </Carousel.Item>
            <Carousel.Item>
            <img style={{height:'300px',width:'550px'}} src="cr1 (3).png" alt="" />
        
              
            </Carousel.Item>
            <Carousel.Item>
            <img style={{height:'300px',width:'550px'}}  src="cr1 (4).png" alt="" />
        
            </Carousel.Item>
            <Carousel.Item>
            <img style={{height:'300px', width:'550px'}} src="cr1 (5).png" alt="" />
        
              
            </Carousel.Item>
        
          </Carousel>
       </div>
       <div className="col" style={{marginTop:'150px'}} >
        <h1 style={{fontWeight:'bolder'}}>Experience the freedom
           <br />
             of the open road.</h1>
        <p style={{width:'400px', textAlign:'justify'}}>Embark on your next adventure with our wide selection of rental cars, tailored to suit every journey. From sleek city cruisers to rugged off-road vehicles, we have the perfect ride for your exploration needs. Book now and make memories that will last a lifetime.</p>
        <button style={{width:'200px',marginLeft:'100px'}}>Explore more</button>
       </div>
    </div>
    );
}

export default ImageSlider;
