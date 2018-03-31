import React from 'react'
var ReactDOM = require('react-dom');
import Link from 'gatsby-link'
import Img from 'gatsby-image'







// Third party JS access `window` without
`typeof window !== "undefined"`




const IndexPage = () => (
<div> 

<header className="navbar-fixed-top header-bg">
    <div className="header-wrap">
        <a href="/" className="logo">
        <span className="full-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 24" width="168px" height="24px">
                <title>Squarespace</title>
                <path id="squarespace-logo-horizontal"
                      d="M79.5626,5.53063l-5.24026,11.58048h1.33081l1.36326-3.03909h6.25848l1.34703,3.03909h1.39632L80.77798,5.53063H79.5626zM77.52551,12.88971l2.62856-5.84795l2.61171,5.84795H77.52551zM41.8326,10.73783c-2.52935-0.54218-3.12082-1.14987-3.12082-2.23424V8.47052c0-1.03445,0.95272-1.85615,2.44762-1.85615c1.18232,0,2.25046,0.37809,3.31798,1.24845l0.75556-1.00201c-1.1661-0.93587-2.36526-1.41254-4.0411-1.41254c-2.18433,0-3.77781,1.33081-3.77781,3.13767v0.03244c0,1.88921,1.21539,2.74335,3.86016,3.3186c2.41455,0.50911,2.9898,1.11681,2.9898,2.18433v0.03307c0,1.13365-1.01885,1.95472-2.56304,1.95472c-1.59285,0-2.74273-0.54218-3.94189-1.62654l-0.80485,0.95334c1.37947,1.23161,2.87437,1.8393,4.69745,1.8393c2.28353,0,3.9263-1.2809,3.9263-3.25247v-0.03244C45.57796,12.23273,44.39502,11.29623,41.8326,10.73783zM59.77015,11.36174V11.3293c0-3.17073-2.34904-5.91409-5.84795-5.91409s-5.88039,2.77642-5.88039,5.94653v0.03307c0,3.17011,2.34841,5.91346,5.84733,5.91346c1.41317,0,2.64477-0.45983,3.61434-1.21539l1.52734,1.36325l0.88721-0.96894l-1.51112-1.28152C59.26104,14.15438,59.77015,12.79113,59.77015,11.36174zM57.45418,14.40083L55.3023,12.4461l-0.87099,0.96894l2.15188,1.83992c-0.72249,0.54218-1.64277,0.85414-2.661,0.85414c-2.62793,0-4.53399-2.13566-4.53399-4.74737V11.3293c0-2.61233,1.87299-4.71492,4.50092-4.71492c2.62855,0,4.53399,2.13566,4.53399,4.74737v0.03307C58.42312,12.54468,58.07809,13.57913,57.45418,14.40083zM71.26765,12.29824c0,2.51313-1.34704,3.79465-3.46585,3.79465c-2.18494,0-3.51514-1.39632-3.51514-3.87701V5.61237h-1.29774v6.68587c0,3.25247,1.93788,4.99381,4.77981,4.99381c2.875,0,4.79665-1.74135,4.79665-5.09239V5.61237h-1.29774V12.29824zM150.96526,16.10911c-2.52997,0-4.45163-2.08637-4.45163-4.74737V11.3293c0-2.64477,1.90544-4.71492,4.45163-4.71492c1.56042,0,2.64478,0.65698,3.61372,1.57726l0.88721-0.95272c-1.14987-1.08436-2.39833-1.8237-4.4847-1.8237c-3.3835,0-5.8149,2.69406-5.8149,5.94653v0.03307c0,3.30176,2.44762,5.91346,5.76559,5.91346c2.08638,0,3.40034-0.80485,4.5995-2.02024l-0.85414-0.83792C153.57697,15.50141,152.5419,16.10911,150.96526,16.10911zM137.64406,5.53063l-5.24025,11.58048h1.3308l1.36327-3.03909h6.25848l1.34703,3.03909h1.39632l-5.24025-11.58048H137.64406zM135.60698,12.88971l2.62856-5.84795l2.61171,5.84795H135.60698zM159.83484,15.92817v-4.02425h6.2747v-1.18294h-6.2747V6.79531h7.01404V5.61237h-8.31178v11.49875h8.39352v-1.18294H159.83484zM102.27933,11.90392h6.27471v-1.18294h-6.27471V6.79531h7.01405V5.61237h-8.31179v11.49875h8.39352v-1.18294h-7.09579V11.90392zM97.54881,9.06199V9.02955c0-0.90343-0.3288-1.7089-0.88721-2.26731c-0.7225-0.72249-1.85614-1.14987-3.26868-1.14987h-4.94453v11.49875h1.29774v-4.46785h3.28554l3.3342,4.46785h1.59348l-3.53136-4.69808C96.23484,12.08486,97.54881,10.96743,97.54881,9.06199zM89.74613,11.47654V6.81153h3.5482c1.85615,0,2.94051,0.85414,2.94051,2.26731v0.03244c0,1.47868-1.23223,2.36526-2.95673,2.36526H89.74613zM116.6849,10.73783c-2.52998-0.54218-3.12144-1.14987-3.12144-2.23424V8.47052c0-1.03445,0.95271-1.85615,2.44762-1.85615c1.18294,0,2.25046,0.37809,3.31798,1.24845l0.75618-1.00201c-1.16672-0.93587-2.36588-1.41254-4.04109-1.41254c-2.18495,0-3.77843,1.33081-3.77843,3.13767v0.03244c0,1.88921,1.21601,2.74335,3.86016,3.3186c2.41517,0.50911,2.9898,1.11681,2.9898,2.18433v0.03307c0,1.13365-1.01823,1.95472-2.56242,1.95472c-1.59348,0-2.74335-0.54218-3.94251-1.62654l-0.80485,0.95334c1.3801,1.23161,2.87499,1.8393,4.69807,1.8393c2.28353,0,3.92567-1.2809,3.92567-3.25247v-0.03244C120.42963,12.23273,119.24731,11.29623,116.6849,10.73783zM127.9528,5.61237h-4.30376v11.49875h1.29774V13.0538h2.79202c2.44761,0,4.51777-1.28152,4.51777-3.76158V9.25915C132.25656,6.99247,130.54828,5.61237,127.9528,5.61237zM130.94197,9.3415c0,1.51112-1.24846,2.52935-3.15389,2.52935h-2.84131V6.81153h2.90745c1.85614,0,3.08775,0.85414,3.08775,2.49691V9.3415zM18.77845,6.54165c0.38683-0.38683,0.38683-1.01281,0-1.39964c-0.38679-0.38679-1.01281-0.38679-1.3996,0l-9.2369,9.2369c-1.31217,1.31217-3.44709,1.31217-4.75856,0.0007c-1.31213-1.31213-1.31213-3.44709,0-4.75922l7.43067-7.43067c0.38679-0.38683,0.38679-1.01281,0-1.39964c-0.38683-0.38679-1.01281-0.38679-1.39964,0L1.98376,8.22076c-2.08368,2.08372-2.08368,5.47477,0,7.55845c2.08372,2.08372,5.47411,2.08302,7.55779-0.00066L18.77845,6.54165zM5.06321,12.6998c0.38679,0.38679,1.01281,0.38679,1.3996,0l9.2369-9.2369c1.31213-1.31213,3.44709-1.31213,4.75856-0.0007c0.38679,0.38683,1.01281,0.38683,1.3996,0c0.38683-0.38679,0.38683-1.01277,0-1.3996c-2.08368-2.08372-5.47407-2.08302-7.55775,0.0007l-9.2369,9.2369C4.67638,11.68699,4.67638,12.31298,5.06321,12.6998zM24.93661,11.30021c-0.38679-0.38683-1.01281-0.38683-1.3996,0l-9.2369,9.2369c-1.31213,1.31213-3.44709,1.31213-4.75856,0.00066c-0.38679-0.38679-1.01281-0.38679-1.3996,0c-0.38683,0.38683-0.38683,1.01281,0,1.3996c2.08368,2.08372,5.47407,2.08302,7.55775-0.00066l9.2369-9.2369C25.32343,12.31298,25.32343,11.68699,24.93661,11.30021zM20.45826,8.22146l-9.2369,9.2369c-0.38683,0.38679-0.38683,1.01281,0,1.3996c0.38679,0.38683,1.01281,0.38683,1.3996,0l9.2369-9.2369c1.31217-1.31213,3.44709-1.31213,4.75856-0.00066c1.31213,1.31213,1.31213,3.44709,0,4.75922l-7.43067,7.43067c-0.38679,0.38679-0.38679,1.01281,0,1.3996c0.38683,0.38683,1.01281,0.38683,1.39964,0l7.43067-7.43067c2.08368-2.08368,2.08368-5.47473,0-7.55845C25.93233,6.13708,22.54194,6.13774,20.45826,8.22146z"></path>
                </svg>
            </span>
            <span className="full-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="30px" height="24px">
                   <title>Squarespace</title>
                   <path id="squarespace-logo-symbol"  d="M24.93671,11.30019c-0.38681-0.38681-1.01281-0.38681-1.39961,0l-9.23691,9.23691c-1.31214,1.31214-3.44709,1.31214-4.75855,0.00068c-0.38681-0.38681-1.01281-0.38681-1.39961,0c-0.38681,0.38681-0.38681,1.01281,0,1.39961c2.0837,2.0837,5.47407,2.08302,7.55778-0.00068l9.2369-9.2369C25.32352,12.313,25.32352,11.687,24.93671,11.30019zM28.01613,8.22077c-2.0837-2.0837-5.47408-2.08302-7.55778,0.00068l-9.2369,9.2369c-0.38681,0.38681-0.38681,1.01281,0,1.39961c0.38681,0.38681,1.01281,0.38681,1.39961,0l9.2369-9.2369c1.31214-1.31214,3.4471-1.31214,4.75855-0.00068c1.31214,1.31214,1.31214,3.4471,0,4.75923l-7.43066,7.43066c-0.38681,0.38681-0.38681,1.01281,0,1.39961c0.38681,0.38681,1.01281,0.38681,1.39961,0l7.43066-7.43066C30.09984,13.69553,30.09984,10.30447,28.01613,8.22077zM21.85797,2.06261c-2.0837-2.0837-5.47408-2.08302-7.55778,0.00068l-9.2369,9.2369c-0.38681,0.38681-0.38681,1.01281,0,1.39961s1.01281,0.38681,1.39961,0l9.2369-9.2369c1.31214-1.31214,3.44709-1.31214,4.75855-0.00068c0.38681,0.38681,1.01281,0.38681,1.39961,0C22.24478,3.07541,22.24478,2.44941,21.85797,2.06261zM18.77855,5.14203c-0.38681-0.38681-1.01281-0.38681-1.39961,0l-9.2369,9.2369c-1.31214,1.31214-3.4471,1.31214-4.75855,0.00068c-1.31214-1.31214-1.31214-3.4471,0-4.75923l7.43066-7.43066c0.38681-0.38681,0.38681-1.01281,0-1.39961s-1.01281-0.38681-1.39961,0L1.98387,8.22077c-2.0837,2.0837-2.0837,5.47476,0,7.55846s5.47408,2.08302,7.55778-0.00068l9.2369-9.2369C19.16535,6.15484,19.16535,5.52884,18.77855,5.14203z"></path>
                </svg>
            </span>
        </a>
        <div className="search">
                <input type="text" placeholder="&nbsp;&nbsp;SEARCH FOR A DOMAIN" autoFocus/>
                <div className="search-icon">
                    <svg viewBox="0 0 25 25">
                        <circle cx="9.87" cy="9.93" r="8.87"></circle>
                        <line x1="23.92" y1="23.98" x2="16.2" y2="16.26"></line>
                    </svg>
                </div>
        </div>
        <div className="header-btn">
            <a href="#" className="log-in">LOG IN</a>
            <a href="#" className="base-button button">CREATE A SITE</a>
        </div>
    </div>
</header>
<main>
    <div className="carousel">      
        <div className="car-pics">           
            <div className="pics pics-wellness pics-real" >
                <img src="https://github.com/Tingoo/squarespace/blob/master/images/images/carousel3/real-estate-scene-2500w.jpg?raw=true" alt=""/>
                <img src="https://github.com/Tingoo/squarespace/blob/master/images/images/carousel3/real-estate-overlay-1-500w.png?raw=true" alt="" className="pics-png"/>
                <div className="pic-up">
                    <img src="https://github.com/Tingoo/squarespace/blob/master/images/images/carousel3/real-estate-screen-300w.jpg?raw=true" alt="" className="pics-300"/>
                </div>
            </div>
            <div className="pics pics-wellness pics-rest" >
                <img src="https://github.com/Tingoo/squarespace/blob/master/images/images/carousel4/restaurant-scene-2500w.jpg?raw=true" alt=""/>
                <img src="https://github.com/Tingoo/squarespace/blob/master/images/images/carousel4/restaurant-overlay-1-500w.png?raw=true" alt="" className="pics-png"/>
                <div className="pic-up">
                    <img src="https://github.com/Tingoo/squarespace/blob/master/images/images/carousel4/restaurant-screen-300w.jpg?raw=true" alt="" className="pics-300"/>
                </div>
            </div>
        </div>      
        <div className="car-text">
            <div className="text animated-in">
                <h1 className="text-heading">
                   <span>Make it</span>                                            


            <a href="" className="typewrite" data-period="2000" data-type='[ "loud.", "fresh.", "beautiful.", "tasteful." ]'>
    <span className="wrap"></span>
            </a>

                    <span className="typer-container" id="Typed">
                    </span>
                </h1>
              <h3 className="text-sub-heading">Make your own website.</h3>
                <div className="text-start ">
                    <a href="#" className="button">Start A Free Trial</a>
                    <h5>No credit card required.</h5>
                </div>
            </div>
        </div>       
    </div>
    <div className="logos">
        <div className="logo-text">
            <div className="row">
                <div className="col-md-5 col-xs-8 col-xs-offset-2 col-md-offset-0">
                    <h4 className="logo-text-heading">TRUSTED BY THE WORLD'S BEST</h4>
                </div>
                <div className="col-md-5 col-xs-10 col-xs-offset-1 col-md-offset-0">
                    <p className="logo-text-desc">Squarespace powers millions of websites across hundreds of industries for people just like you.</p>
                </div>
                <div className="col-md-2 col-xs-6 col-xs-offset-3 col-md-offset-0">
                    <a className="show-more">See All Stories</a>
                </div>
            </div>
         </div>
    </div>
 </main>

<section className="homecons mt-4 mb-4" className="py-8">
          <div className="container">
            <div className="row">
              <div className="slide col-md-2 mb-4 text-center">
               <img src="https://github.com/Tingoo/squarespace/blob/master/images/logo/Airwalk.jpg?raw=true"/>
                </div>
              <div className=" slide col-md-2 mb-4 text-center ">               
                <img src="https://github.com/Tingoo/squarespace/blob/master/images/logo/Apotheke.jpg?raw=true"/>
                </div>
              <div className=" slide col-md-2 mb-4 text-center">               
              <img src="https://github.com/Tingoo/squarespace/blob/master/images/logo/DannyClinch.jpg?raw=true"/>                  
              </div>
              <div className="slide col-md-2 mb-4 text-center">                
              <img src="https://github.com/Tingoo/squarespace/blob/master/images/logo/DarrenBooth.jpg?raw=true"/>
                  </div>
              <div className="slide col-md-2 mb-4 text-center">                
              <img src="https://github.com/Tingoo/squarespace/blob/master/images/logo/Eggshop.jpg?raw=true"/>
                              </div>               
              <div className="slide col-md-2 mb-4 text-center">                
              <img src="https://github.com/Tingoo/squarespace/blob/master/images/logo/HaloCreameryLogo300x112.jpg?raw=true"/>
            </div>
       </div>
    </div>          
 </section>             

<div className='carousel is-3 carousel-animated carousel-animate-slide'>
  <div className='carousel-container'>
    <div className='carousel-item is-active'>
      <figure className="image is-1by1"><img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9306/assets/blocks/content/home-summer-2017/featured-customers/keanu-reeves.jpg"/></figure>
    
    <h3 className="slide-title">Keanu Reeves</h3>
      <p className="slide-subtitle">Actor &amp; Co-Founder of Arch Motorcycle</p>
      </div>       
    <div className='carousel-item'>
      <figure className="image is-1by1"><img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9306/assets/blocks/content/home-summer-2017/featured-customers/danny-bowien.jpg?2"/></figure>
      <h3 className="slide-title">Danny Bowien</h3>
      <p className="slide-subtitle">Chef &amp; Co-Founder of Mission Chinese Food</p>
      </div>         
    <div className='carousel-item'>
      <figure className="image is-1by1"><img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9306/assets/blocks/content/home-summer-2017/featured-customers/sadie-williams.jpg?2"/></figure>
      <h3 className="slide-title">Sadie Williams</h3>
      <p className="slide-subtitle">Fashion Designer</p>
      </div>                 
    <div className='carousel-item'>
      <figure className="image is-1by1"><img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9306/assets/blocks/content/home-summer-2017/featured-customers/john-malkovich.jpg?2"/></figure>
      <h3 className="slide-title">John Malkovich</h3>
      <p className="slide-subtitle">Actor &amp; Fashion Designer</p>
      </div>                   
    <div className='carousel-item'>
      <figure className="image is-1by1"><img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9306/assets/blocks/content/home-summer-2017/featured-customers/sarah-levey.jpg?2"/></figure>
      <h3 className="slide-title">Sarah Levey</h3>
      <p className="slide-subtitle">Co-Founder of Y7 Hip Hop Yoga Studio</p>
      </div>                  
    <div className='carousel-item'>
      <figure className="image is-1by1"><img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9306/assets/blocks/content/home-summer-2017/featured-customers/lyon-porter.jpg?2"/></figure>
      <h3 className="slide-title">Lyon Porter</h3>
      <p className="slide-subtitle">Founder of Urban Cowboy B&amp;B</p>
      </div>                        
    <div className='carousel-item'>
      <figure className="image is-1by1"><img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9306/assets/blocks/content/home-summer-2017/featured-customers/tom-delavan.jpg?2"/></figure>
      <h3 className="slide-title">Tom Delavan</h3>
      <p className="slide-subtitle">Interior Designer</p>
      </div>                          
    <div className='carousel-item'>
      <figure className="image is-1by1"><img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9306/assets/blocks/content/home-summer-2017/featured-customers/daniel-arsham.jpg?2"/></figure>
      <h3 className="slide-title">Daniel Arsham</h3>
      <p className="slide-subtitle">Artist</p>                  
    </div>
  </div>
  <div className="carousel-navigation is-centered">
    <div className="carousel-nav-left">
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div className="carousel-nav-right">
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
</div>       

<section className="hero">
  <div className="hero-body">
  <div className="right">
    <div className="container">
    <div className="columns">
    <div className="column">           
    <div className="car">    
          <img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9258/assets/blocks/content/home-summer-2017/design-feature/carson-background.jpg?2" className="car"></img>              
    </div>     
<section className="in" >
    <div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true" data-delay="3000">
  <div className='carousel-container'>
    <div className='carousel-item has-background is-active'>
      <img className="is-background" src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9258/assets/blocks/content/home-summer-2017/design-feature/camino-foreground.jpg?2" alt="" width="640" height="310" />
     
    </div>
    <div className='carousel-item has-background'>
      <img className="is-background" src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9258/assets/blocks/content/home-summer-2017/design-feature/carson-foreground.jpg?2" alt="" width="640" height="310" />
      
    </div>
    <div className='carousel-item has-background'>
      <img className="is-background" src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9258/assets/blocks/content/home-summer-2017/design-feature/west-foreground.jpg?2" alt="" width="640" height="310" />
      
    </div>
    <div className='carousel-item has-background'>
      <img className="is-background" src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9258/assets/blocks/content/home-summer-2017/design-feature/foster-foreground.jpg?2" alt="" width="640" height="310" />
        </div>
  </div>           
  <div className="carousel-navigation">
    <div className="carousel-nav-left">
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div className="carousel-nav-right">
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
</div>        
<div className="view-templates-overlay">
          <a className="buttonff" href="/templates">View Templates</a>
        </div>
</section>
</div>
<div className="column">
    <h5 className="sub-title">
        AWARD-WINNING DESIGN
    </h5>
     <h2 className="title">
        LOOK LIKE AN EXPERT RIGHT FROM THE START.
     </h2>
    <p>Our award-winning templates are the most beautiful way to present your ideas online. Stand out with a professional website, portfolio, or online store.</p>
       <a className="cta button" href="/templates">GET STARTED</a>
    <button type="button" className="btn btn-link">Learn More</button>
        </div>      
       </div>
     </div>
   </div>
  </div>
</section>

<section className="hero py-2" >
    <div className="hero-body">
     <div className="container">
         <div className="columns">
            <div className="column">    
                <h5 className="sub-title">
                 ONLINE STORES
                 </h5>
                     <h2 className="title">
                         ALL YOU NEED TO POWER YOUR ONLINE STORE.
                     </h2>
                    <p>Our all-in-one platform gives you everything you need to run your business. Whether you’re just getting started or are an established brand, our powerful platform helps your business grow.</p>
                        <a className="cta button" href="/templates">GET STARTED</a>
                      <button type="button" className="btn btn-link">Learn More</button>
                    </div>  
                   <div className="column">  
                  <div className="choco">  
                 <img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9258/assets/blocks/content/home-summer-2017/online-stores-feature/background.jpg?2" alt="An artisanal chocolate ecommerce website." className="chocolate"/>  
                <iframe  width="448" height="385"  src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9258/assets/blocks/content/home-summer-2017/online-stores-feature/foreground-500.mp4  " frameBorder="0" ></iframe>
               </div>      
             </div>
           </div>
       </div>  
  </div>
</section>

<section className="hero">
  <div className="hero-body">
   <div className="right">
     <div className="container">
      <div className="columns">
       <div className="column">   
         <div className="iphone"> 
           <iframe width="528" height="525"  src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9258/assets/blocks/content/home-summer-2017/marketing-feature/background-video-500.mp4" frameBorder="0" ></iframe>
             <img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9258/assets/blocks/content/home-summer-2017/marketing-feature/foreground.jpg?2" alt="Bakers need websites, too." className="image"/>  
           </div>
          </div>
 <div className="column">
     <h5 className="sub-title">
        MARKETING TOOLS
     </h5>
       <h2 className="title">
         REACH AND GROW YOUR AUDIENCE.
       </h2>
             <p>Squarespace provides you with a comprehensive set of marketing tools to engage with your audience, get found across search and social, and grow your following.</p>
           <a className="cta button" href="/templates">GET STARTED</a>
          <button type="button" className="btn btn-link">Learn More</button>
         </div>      
        </div>
       </div>
      </div>
     </div> 
</section>  

<section className="hero py-l ">
  <div className="hero-body">
    <div className="container">
     <div className="columns">
      <div className="column ">      
       <h5 className="sub-title">
          ALL-IN-ONE PLATFORM
         </h5>
          <h2 className="title">
            WE’VE GOT YOU COVERED.
             </h2>
                 <p>Think of Squarespace as your very own IT department, with free, unlimited hosting, top-of-the-line security, an enterprise-grade infrastructure, and around-the-clock support. Get personalized support from our Customer Care Team via email or live chat. Reach out any time — we’re here 24/7.</p>
                <a className="cta button" href="/templates">VISIT HELP CENTER</a>
               <button type="button" className="btn btn-link">Learn More</button>
             </div>
            <div className="column">       
         <img src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9288/assets/blocks/content/home-summer-2017/support-feature/primary-3.jpg?2" className="limg"></img>
      </div>             
     </div>
   </div>
  </div>     
</section>  

<footer>
    <div className="footer-wrap">
        <div className="container-fluid">
            <div className="footer-text">
                <div className="row">
                    <div className="col-sm-12   col-md-2 col-lg-2">
                        <div className="footer-choose">
                            <span className="full-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="30px" height="24px">
                                  <title>Squarespace</title>
                                  <path id="squarespace-logo-symbol" 
                                        d="M24.93671,11.30019c-0.38681-0.38681-1.01281-0.38681-1.39961,0l-9.23691,9.23691c-1.31214,1.31214-3.44709,1.31214-4.75855,0.00068c-0.38681-0.38681-1.01281-0.38681-1.39961,0c-0.38681,0.38681-0.38681,1.01281,0,1.39961c2.0837,2.0837,5.47407,2.08302,7.55778-0.00068l9.2369-9.2369C25.32352,12.313,25.32352,11.687,24.93671,11.30019zM28.01613,8.22077c-2.0837-2.0837-5.47408-2.08302-7.55778,0.00068l-9.2369,9.2369c-0.38681,0.38681-0.38681,1.01281,0,1.39961c0.38681,0.38681,1.01281,0.38681,1.39961,0l9.2369-9.2369c1.31214-1.31214,3.4471-1.31214,4.75855-0.00068c1.31214,1.31214,1.31214,3.4471,0,4.75923l-7.43066,7.43066c-0.38681,0.38681-0.38681,1.01281,0,1.39961c0.38681,0.38681,1.01281,0.38681,1.39961,0l7.43066-7.43066C30.09984,13.69553,30.09984,10.30447,28.01613,8.22077zM21.85797,2.06261c-2.0837-2.0837-5.47408-2.08302-7.55778,0.00068l-9.2369,9.2369c-0.38681,0.38681-0.38681,1.01281,0,1.39961s1.01281,0.38681,1.39961,0l9.2369-9.2369c1.31214-1.31214,3.44709-1.31214,4.75855-0.00068c0.38681,0.38681,1.01281,0.38681,1.39961,0C22.24478,3.07541,22.24478,2.44941,21.85797,2.06261zM18.77855,5.14203c-0.38681-0.38681-1.01281-0.38681-1.39961,0l-9.2369,9.2369c-1.31214,1.31214-3.4471,1.31214-4.75855,0.00068c-1.31214-1.31214-1.31214-3.4471,0-4.75923l7.43066-7.43066c0.38681-0.38681,0.38681-1.01281,0-1.39961s-1.01281-0.38681-1.39961,0L1.98387,8.22077c-2.0837,2.0837-2.0837,5.47476,0,7.55846s5.47408,2.08302,7.55778-0.00068l9.2369-9.2369C19.16535,6.15484,19.16535,5.52884,18.77855,5.14203z"></path>
                                </svg>
                            </span>
                            <div className="money">
                                <span className="money-text">$ USD</span>
                                <span className="caret money-icon"></span>
                            </div>
                            <div className="language">
                                <span className="money-text">English(US)</span>
                                <span className="caret language-icon"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2  col-md-2  col-lg-2 col-sm-offset-1 col-md-offset-0">
                        <ul>
                            <li className="footer-title"> Products</li>
                            <li><a href="#" className="footer-nav">Domains</a></li>
                            <li><a href="#" className="footer-nav">Websites</a></li>
                            <li><a href="#" className="footer-nav">Online Stores</a></li>
                            <li><a href="#" className="footer-nav">Mobile Apps</a></li>
                            <li><a href="#" className="footer-nav">Logos</a></li>
                            <li><a href="#" className="footer-nav">Pricing</a></li>
                            <li><a href="#" className="footer-nav">Feature Index</a></li>
                            <li><a href="#" className="footer-nav">Login</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-2 col-md-2  col-lg-2 ">
                        <ul>
                            <li className="footer-title">
                                Tours
                            </li>
                            <li><a href="#" className="footer-nav">Online Stores</a></li>
                            <li><a href="#" className="footer-nav">Photographers</a></li>
                            <li><a href="#" className="footer-nav">Bloggers</a></li>
                            <li><a href="#" className="footer-nav">Artists</a></li>
                            <li><a href="#" className="footer-nav">Restaurants</a></li>
                            <li><a href="#" className="footer-nav">Musicians</a></li>
                            <li><a href="#" className="footer-nav">Weddings</a></li>
                            <li><a href="#" className="footer-nav">Small Businesses</a></li>
                            <li><a href="#" className="footer-nav">Customers</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-2 col-md-2  col-lg-2 ">
                        <ul>
                            <li className="footer-title">
                                Company
                            </li>
                            <li><a href="#" className="footer-nav">About</a></li>
                            <li><a href="#" className="footer-nav">Careers</a></li>
                            <li><a href="#" className="footer-nav">Press & Media</a></li>
                            <li><a href="#" className="footer-nav">Terms of Service</a></li>
                            <li><a href="#" className="footer-nav">Privacy Policy</a></li>
                            <li><a href="#" className="footer-nav is-external">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-2 col-md-2  col-lg-2 ">
                        <ul>
                            <li className="footer-title">
                                Community
                            </li>
                            <li><a href="#" className="footer-nav is-external">Help & Support</a></li>
                            <li><a href="#" className="footer-nav is-external">Answers</a></li>
                            <li><a href="#" className="footer-nav is-external">Workshops & Webinars</a></li>
                            <li><a href="#" className="footer-nav is-external">Specialists</a></li>
                            <li><a href="#" className="footer-nav is-external">Developers</a></li>
                            <li><a href="#" className="footer-nav is-external">Circle</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-2 col-md-2  col-lg-2 ">
                        <ul>
                            <li className="footer-title">
                                Follow
                            </li>
                            <li><a href="#" className="footer-nav is-external">Squarespace Blog</a></li>
                            <li><a href="#" className="footer-nav is-external">Engineering Blog</a></li>
                            <li><a href="#" className="footer-nav is-external">Service Status</a></li>
                            <li><a href="#" className="footer-nav is-external">Instagram</a></li>
                            <li><a href="#" className="footer-nav is-external">Facebook</a></li>
                            <li><a href="#" className="footer-nav is-external">Twitter</a></li>
                            <li><a href="#" className="footer-nav is-external">Google Plus</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-wrap2">
        <ul>
            <li className="wrap2-title">
                <h4 className="footer-title">
                    Products
                    <svg className="arrow-down" viewBox="0 0 27 17.7">
                        <path fillRule="evenodd" clipRule="evenodd" d="M.5 3.9l13 12.9 13-12.9L23.6 1l-10 10-10-10L.5 3.9z"></path>
                    </svg>
                </h4>
                <ul>
                    <li><a href="#" className="footer-nav">Domains</a></li>
                    <li><a href="#" className="footer-nav">Websites</a></li>
                    <li><a href="#" className="footer-nav">Online Stores</a></li>
                    <li><a href="#" className="footer-nav">Mobile Apps</a></li>
                    <li><a href="#" className="footer-nav">Logos</a></li>
                    <li><a href="#" className="footer-nav">Pricing</a></li>
                    <li><a href="#" className="footer-nav">Feature Index</a></li>
                    <li><a href="#" className="footer-nav">Login</a></li>
                </ul>
            </li>
            <li  className="wrap2-title">
                <h4 className="footer-title">
                    Tours
                    <svg className="arrow-down" viewBox="0 0 27 17.7">
                        <path fillRule="evenodd" clipRule="evenodd" d="M.5 3.9l13 12.9 13-12.9L23.6 1l-10 10-10-10L.5 3.9z"></path>
                    </svg>
                </h4>
                <ul>
                    <li><a href="#" className="footer-nav">Online Stores</a></li>
                    <li><a href="#" className="footer-nav">Photographers</a></li>
                    <li><a href="#" className="footer-nav">Bloggers</a></li>
                    <li><a href="#" className="footer-nav">Artists</a></li>
                    <li><a href="#" className="footer-nav">Restaurants</a></li>
                    <li><a href="#" className="footer-nav">Musicians</a></li>
                    <li><a href="#" className="footer-nav">Weddings</a></li>
                    <li><a href="#" className="footer-nav">Small Businesses</a></li>
                    <li><a href="#" className="footer-nav">Customers</a></li>
                </ul>
            </li>
            <li  className="wrap2-title">
                <h4 className="footer-title">
                    Company
                    <svg className="arrow-down" viewBox="0 0 27 17.7">
                        <path fillRule="evenodd" clipRule="evenodd" d="M.5 3.9l13 12.9 13-12.9L23.6 1l-10 10-10-10L.5 3.9z"></path>
                    </svg>
                </h4>
                <ul>
                    <li><a href="#" className="footer-nav">About</a></li>
                    <li><a href="#" className="footer-nav">Careers</a></li>
                    <li><a href="#" className="footer-nav">Press & Media</a></li>
                    <li><a href="#" className="footer-nav">Terms of Service</a></li>
                    <li><a href="#" className="footer-nav">Privacy Policy</a></li>
                    <li><a href="#" className="footer-nav is-external">Contact Us</a></li>
                </ul>
            </li>
            <li  className="wrap2-title">
                <h4 className="footer-title">
                    Community
                    <svg className="arrow-down" viewBox="0 0 27 17.7">
                        <path fillRule="evenodd" clipRule="evenodd" d="M.5 3.9l13 12.9 13-12.9L23.6 1l-10 10-10-10L.5 3.9z"></path>
                    </svg>
                </h4>
                <ul>
                    <li><a href="#" className="footer-nav is-external">Help & Support</a></li>
                    <li><a href="#" className="footer-nav is-external">Answers</a></li>
                    <li><a href="#" className="footer-nav is-external">Workshops & Webinars</a></li>
                    <li><a href="#" className="footer-nav is-external">Specialists</a></li>
                    <li><a href="#" className="footer-nav is-external">Developers</a></li>
                    <li><a href="#" className="footer-nav is-external">Circle</a></li>
                </ul>
            </li>
            <li  className="wrap2-title">
                <h4 className="footer-title">
                    Follow
                    <svg className="arrow-down" viewBox="0 0 27 17.7">
                        <path fillRule="evenodd" clipRule="evenodd" d="M.5 3.9l13 12.9 13-12.9L23.6 1l-10 10-10-10L.5 3.9z"></path>
                    </svg>
                </h4>
                <ul>
                    <li><a href="#" className="footer-nav is-external">Squarespace Blog</a></li>
                    <li><a href="#" className="footer-nav is-external">Engineering Blog</a></li>
                    <li><a href="#" className="footer-nav is-external">Service Status</a></li>
                    <li><a href="#" className="footer-nav is-external">Instagram</a></li>
                    <li><a href="#" className="footer-nav is-external">Facebook</a></li>
                    <li><a href="#" className="footer-nav is-external">Twitter</a></li>
                    <li><a href="#" className="footer-nav is-external">Google Plus</a></li>
                </ul>
            </li>
        </ul>
        
        <div className="clearfix"></div>
        
        <div className="row wrap2-choose">
            <div className="col-sm-12">
                <div className="footer-choose">
                            <span className="full-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" width="30px" height="24px">
                                  <title>Squarespace</title>
                                  <path id="squarespace-logo-symbol" 
                                        d="M24.93671,11.30019c-0.38681-0.38681-1.01281-0.38681-1.39961,0l-9.23691,9.23691c-1.31214,1.31214-3.44709,1.31214-4.75855,0.00068c-0.38681-0.38681-1.01281-0.38681-1.39961,0c-0.38681,0.38681-0.38681,1.01281,0,1.39961c2.0837,2.0837,5.47407,2.08302,7.55778-0.00068l9.2369-9.2369C25.32352,12.313,25.32352,11.687,24.93671,11.30019zM28.01613,8.22077c-2.0837-2.0837-5.47408-2.08302-7.55778,0.00068l-9.2369,9.2369c-0.38681,0.38681-0.38681,1.01281,0,1.39961c0.38681,0.38681,1.01281,0.38681,1.39961,0l9.2369-9.2369c1.31214-1.31214,3.4471-1.31214,4.75855-0.00068c1.31214,1.31214,1.31214,3.4471,0,4.75923l-7.43066,7.43066c-0.38681,0.38681-0.38681,1.01281,0,1.39961c0.38681,0.38681,1.01281,0.38681,1.39961,0l7.43066-7.43066C30.09984,13.69553,30.09984,10.30447,28.01613,8.22077zM21.85797,2.06261c-2.0837-2.0837-5.47408-2.08302-7.55778,0.00068l-9.2369,9.2369c-0.38681,0.38681-0.38681,1.01281,0,1.39961s1.01281,0.38681,1.39961,0l9.2369-9.2369c1.31214-1.31214,3.44709-1.31214,4.75855-0.00068c0.38681,0.38681,1.01281,0.38681,1.39961,0C22.24478,3.07541,22.24478,2.44941,21.85797,2.06261zM18.77855,5.14203c-0.38681-0.38681-1.01281-0.38681-1.39961,0l-9.2369,9.2369c-1.31214,1.31214-3.4471,1.31214-4.75855,0.00068c-1.31214-1.31214-1.31214-3.4471,0-4.75923l7.43066-7.43066c0.38681-0.38681,0.38681-1.01281,0-1.39961s-1.01281-0.38681-1.39961,0L1.98387,8.22077c-2.0837,2.0837-2.0837,5.47476,0,7.55846s5.47408,2.08302,7.55778-0.00068l9.2369-9.2369C19.16535,6.15484,19.16535,5.52884,18.77855,5.14203z"></path>
                                </svg>
                            </span>
                    <div className="money">
                        <span className="money-text">$ USD</span>
                        <span className="caret money-icon"></span>
                    </div>
                    <div className="language">
                        <span className="money-text">English(US)</span>
                        <span className="caret language-icon"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

</div>
)
export default IndexPage

