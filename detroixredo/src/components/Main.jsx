import ManImage from "./heroimage.png";
import plant from "./plant.png";
import puzzle from "./puzzle.png";
import shape from "./shape.png";
import gearImage from './gearbullet.jpg';
import speechBubble from './speechbubble.jpg';
import nine from './nine.png';
import twentyone from './twenty-one.png';
import seventeen from './seventeen.png';

function Main(){
  return(
    <main role="main" className="container-fluid">
        <HeroImage/>
        <Dots/>
        <Sections/>
        <Infobox/>
    </main>
  )
}
function HeroImage(){
  return(
    <div className="col-12">
      <img
        src={ManImage}
        className="img-fluid"
        alt="Professional man standing confidently in a modern office environment"
      />
    </div>
  )
}
        
function Dots(){
    return(
        <div className="d-flex flex-row justify-content-center dotsRow">
            <button></button>
            <button></button>
            <button></button>
        </div>
    )
}
// **********************************************************
function Sections(){
    return(
        <div className="row sections">
            <Smart/>
            <Strong/>
            <Stable/>
        </div>
    )
}
    //**************************************************** */ 
 function Smart(){
    return(
    <div className="col-4 col-sm-12 section">
        <div className="smart">
            <h3>SMART</h3>
            <img className="img-fluid my-2" src={puzzle} alt="puzzle" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sunt voluptates animi, atque cumque ut facilis itaque ducimus. Aut explicabo tempora illum, voluptatibus cum repellendus. Facere veniam consequuntur adipisci perferendis!</p>
            <button className="morebutton">MORE</button>
        </div>
    </div>
    )
 }       
// *******************************************************
function Strong(){
    return(
    <div className="col-4 col-sm-12 section">
        <div className="strong">
            <h3>STRONG</h3>
            <img className="img-fluid my-2" src={plant} alt="plant" />
             <p className="strongp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, minus, neque dicta voluptatum cum magni enim quod cumque soluta natus laudantium nesciunt repellat velit architecto doloremque atque suscipit officia non.</p>
            <button className="morebutton">MORE</button>
        </div>
    </div>
    )
}  
    //******************************************************* */ 
function Stable(){
    return(
        <div className="col-4 col-sm-12 section">
            <div className="stable">
                <h3>STABLE</h3>
                <img className="img-fluid my-2" src={shape} alt="shape" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius debitis sint non minus, veritatis labore! Repudiandae ratione deleniti officia itaque, veritatis aut, nulla facere, beatae aliquid quam sunt in sed.</p>
                <button className="morebutton">MORE</button>
            </div>
        </div>
    )
}           
    //********************************************* */ 
function Infobox(){   
    return(
    <div className="row infobox">
        <Services/>
        <Opportunities/>
        <News/>
    </div>  )
}  
 const listStyle ={
        listStyleImage:`url(${gearImage})`
 }
function Services(){
        
    return(
    <div className="col-4 col-sm-12 services">
       
            <h4>SERVICES</h4>
            <ul  style={listStyle}>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <button>MORE</button>
        
    </div>
    )
}
// *****OPPORTUNITIES***********
const listStyle={
    listStyleImage:`url(${speechBubble})`
}
function Opportunities(){
    return(
        <div className="col-4 col-sm-12 services">
            <h4>OPPORTUNITIES</h4>
            <ul style={listStyle}>
                <li>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptate.</p>
                </li>
                <li>
                    <h4>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iure.</p>
                </li>
            </ul>
            <button>MORE</button>
        </div>
    )
}  

function News(){
    return(
    <div className="col-4 col-12 services">
        <div className="row">
            <div className="col-3">
                <h4>NEWS</h4>
                <img src="{twentyone}" className="img-fluid" alt="date box for the 17th"/>
                <img src="{nine}" className="img-fluid" alt="date box for the 17th"/>
                <img src="{seventeen}" className="img-fluid" alt="date box for the 17th"/>
                <button>MORE</button> 
            </div>
            <div className="col-9">
                
                <div>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, saepe.</p>
                </div>
                <div>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, adipisci!</p>
                </div>
                <div>
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, exercitationem.</p>
                </div>
            </div> 
        </div>
    </div>
    )
}        
export default Main