import user from "./assets/default-avatar-icon-of-social-media-user-vector.jpg"
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartFill } from "react-icons/ri";
import bicycle from "./assets/JMO_0208.webp"

function App() {

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

          <a href="#">wheels</a>
          <a href="#">bicycles</a>

          <div className="account">

            <img src={user} alt="" />

            <button>user</button>

          </div>

        </div>

      </div>

      <div className="center">

        <div className="content">

          <div className="photo">

            <img src={bicycle} alt="" />

          </div>

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
