import user from "./assets/default-avatar-icon-of-social-media-user-vector.jpg"
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartFill } from "react-icons/ri";
import bicycle from "./assets/JMO_0208.webp"
import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import LogIn from "./components/LogIn";


function App() {
  const images = [
    "https://www.bike-discount.de/media/image/05/38/cd/Focus-Sam-1534k9Bsy3aLcp_800x800@2x.jpg",
    "https://www.bike-discount.de/media/image/a4/b7/16/Focus-Sam-2mAJYiN47kwUCk_800x800@2x.jpg",
    "https://www.bike-discount.de/media/image/40/4b/bb/Focus-Sam-3ubX8yyicPMt8n_800x800@2x.jpg",
    "https://www.bike-discount.de/media/image/12/45/2e/Focus-Sam-4I9RcIUCmOEwyR_800x800@2x.jpg"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="main">

      <div className="header">

        <div className="left-header">

          <h1>rentomo</h1>

        </div>

        <div className="center-header">
          <input
            type="search"
            placeholder="search"
          />

          <div className="search">

            <button><CiSearch /> </button>

          </div>

        </div>

        <div className="right-header">

          <button className="cart">
            <RiShoppingCartFill />
          </button>

          <a href="#">Wheels</a>
          <a href="#">Bicycles</a>

          <div className="account">

            <img src={user} alt="" />

            <LogIn />

          </div>

        </div>

      </div>

      <div className="center">

        <div className="content">

          <button className="next" onClick={prevSlide}><GrFormPrevious />
          </button>

          <div className="photo">

            <img src={images[currentIndex]} alt="" />

          </div>

          <button className="next" onClick={nextSlide}><MdNavigateNext />
          </button>


          <div className="description">

            <div>
              <h1>Core-Line - Rigby</h1>
            </div>

            <div><p><b>Price:</b> $399.99</p></div>
            <div><p>As low as $18.09 / Month *</p></div>
            <div><p><b>Frame:</b> Durable Steel frame ft.  seat Rack Mounts and Cable Stops <br />
              <b>Dropouts:</b> Horizontal Dropouts ft. Integrated Chain-Tensioners <br />
              <b>Wheel Set:</b> Deep V Wheel Set ft. 40mm High-Flange Hubs w/Sealed Bearings and 700x28c Tires <br />
              <b>Flip-Flop Hub:</b> Include 16T Freewheel and fixed gear cog-easily Ride Fixed Gear or Single Speed <br />
              <b>Gear Ratio:</b> 44x16 <br />
              <b>Handlebars: </b>Choose Riser Bars w/Vans Grips (Srandart) or Bullhorn or Drop Bars w/Bars Tape <br />
              <b>Brakes: </b>Front & Rear Caliper Hand Brakes <br />
              <b>Pedals:</b> Platfrom Pedals <br />
              <b>Saddle: </b>Synthetic Leather Saddle w/Steel Rails <br />
            </p></div>

            <button>ADD TO CART</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App
