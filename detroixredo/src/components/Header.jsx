import detroix from './detroix.png'

function Header(){
  return(
    <header role="banner" className="row">
          <SmallNav/>
          <LargeNav/>
    </header>
 )
}

function SmallNav(){
  return(
    <nav className="row topBar d-none.d-sm-block">
            <div className="col-2">
                <a href="#">
                <p>www.DEMOLINK.ORG</p>
                </a>
            </div>
            <ul className="col-10">
                <li><a href="#">SUPPORT</a>|</li>
                <li><a href="#">FAQS</a>|</li>
                <li><a href="#">SITEMAP</a>|</li>
                <li><a href="#">HELP</a></li>
            </ul>
    </nav>
  )
}
function LargeNav(){
  return(
      <nav className="row logo mt-2">
          <div className="col-3 col-sm-12 text-center">
          <img src={detroix} className="img-fluid" alt="the word detroix"/>  
          </div>
          <div className="col-6  col-sm-12">
            <button><a href="#">Home</a></button>
            <button><a href="#">About</a></button>
            <button><a href="#">Services</a></button>
            <button><a href="#">FAQS</a></button>
            <button><a href="#">Contact</a></button>
          </div>
        </nav>
  )    
}
export default Header
