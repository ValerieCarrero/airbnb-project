import Beach from "../assets/icons/beach.png";
import Boat from "../assets/icons/boat.png";
import Cabins from "../assets/icons/cabins.png";
import Caves from "../assets/icons/caves.png";
import Cities from "../assets/icons/cities.png";
import Containers from "../assets/icons/containers.png";
import Continue from "../assets/icons/continue.png";
import Earth from "../assets/icons/earth.png";
import Filters from "../assets/icons/filters.png";
import Historical from "../assets/icons/historical.png";
import Lake from "../assets/icons/lake.png";
import logo from "../assets/icons/logo.png";
import Luxe from "../assets/icons/luxe.png";
import Map from "../assets/icons/map.png";
import Menu from "../assets/icons/menu.png";
import National from "../assets/icons/national.png";
import New from "../assets/icons/new.png";
import OMG from "../assets/icons/OMG.png";
import Tiny from "../assets/icons/tiny.png";
import Trend from "../assets/icons/trend.png";
import View from "../assets/icons/views.png";
import World from "../assets/icons/world.png";

const filters = [
    { img: Beach, title: "Beach" },
    { img: Boat, title: "Boat" },
    { img: Cabins, title: "Cabins" },
    { img: Caves, title: "Caves" },
    { img: Cities, title: "Cities" },
    { img: Containers, title: "Containers" },
    { img: Earth, title: "Earth" },
    { img: Historical, title: "Historical" },
    { img: Lake, title: "Lake" },
    { img: Luxe, title: "Luxe" },
    { img: National, title: "National" },
    { img: New, title: "New" },
    { img: OMG, title: "OMG" },
    { img: Tiny, title: "Tiny" },
    { img: Trend, title: "Trend" },
    { img: View, title: "View" },
    { img: World, title: "World" },
  ];

  export default function Filter() {
    return (
      <div className="filter">
          {filters.map((filter, index) => (
            <div key={index} className="filter__item">
              <img src={filter.img} alt={filter.title} className="filter__icon" />
              <h3 className="filter__title">{filter.title}</h3>
            </div>
          ))}
        </div>
    );
  }

 