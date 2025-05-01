import Search from "../assets/icons/search.png"

export default function Input() {
  return (
    <div className="input">
      <div className="input-items">


        {/* Where */}
        <div className="input-item-menu">
          <div className="destinations serch-destination-where">
            <p className="title">Where</p>
            <p className="subtitle">Search for destinations</p>
          </div>
        </div>

        {/* Check in */}
        <div className="input-item-menu">
          <div className="destinations serch-destination-date">
            <p className="title">Check in</p>
            <p className="subtitle">Add dates</p>
          </div>
        </div>

        {/* Check out */}
        <div className="input-item-menu">
          <div className="destinations serch-destination-date">
            <p className="title">Check out</p>
            <p className="subtitle">Add dates</p>
          </div>
        </div>

        {/* Who */}
        <div className="input-item-menu last-item">
          <div className="destinations serch-destination">
            <p className="title">Who</p>
            <p className="subtitle">Add guests</p>
          </div>
          <img className="search-img" src={Search} alt="Search" />
      </div>


    </div>
    </div>
  )
}
