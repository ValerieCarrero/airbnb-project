import Miami from "../assets/images/miami.jpg";
import Aspen from "../assets/images/aspen.jpg";
import NewYork from "../assets/images/newYork.jpg";
import California from "../assets/images/california.jpg";
import Oregon from "../assets/images/oregon-image.jpg";
import Chicago from "../assets/images/chicago.jpg";
import Seattle from "../assets/images/seattle-image.jpg";
import Austin from "../assets/images/austin.jpg";
import Vegas from "../assets/images/vegas.jpg";
import Savannah from "../assets/images/savannah.jpg";
import Denver from "../assets/images/denver.jpg";
import SanDiego from "../assets/images/sanDiego.jpg";
import Nashville from "../assets/images/nashville.jpg";
import Boston from "../assets/images/boston.jpg";
import Honolulu from "../assets/images/honolulu.jpg";
import Thailand from "../assets/images/thailand-image.jpg";
import Star from "../assets/icons/star.png";
import Heart from "../assets/icons/heart.png";


const listings = [
    {
      id: 1,
      image: Miami,
      title: "Modern Beachfront House",
      location: "Miami, Florida",
      date: "2023-10-01",
      pricePerNight: 120,
      rating: 4.8,
      isGuestFavorite: true,
    },
    {
      id: 2,
      image: Aspen,
      title: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      date: "2023-10-05",
      pricePerNight: 90,
      rating: 4.6,
      isGuestFavorite: false,
    },
    {
      id: 3,
      image: NewYork,
      title: "City Apartment with View",
      location: "New York, NY",
      date: "2023-10-10",
      pricePerNight: 150,
      rating: 4.9,
      isGuestFavorite: true,
    },
    {
      id: 4,
      image: California,
      title: "Luxury Villa with Private Pool",
      location: "Malibu, California",
      pricePerNight: 300,
      rating: 5.0,
      isGuestFavorite: true,
    },
    {
      id: 5,
      image: Oregon,
      title: "Forest Retreat House",
      location: "Portland, Oregon",
      date: "2023-10-15",
      pricePerNight: 100,
      rating: 4.5,
      isGuestFavorite: false,
    },
    {
        id: 6,
        image: Chicago,
        title: "Modern Loft Downtown",
        location: "Chicago, Illinois",
        date: "2023-11-01",
        pricePerNight: 110,
        rating: 4.7,
        isGuestFavorite: false,
      },

      {
        id: 7,
        image: Seattle,
        title: "Lakeview Cottage",
        location: "Seattle, Washington",
        date: "2023-11-04",
        pricePerNight: 130,
        rating: 4.9,
        isGuestFavorite: true,
      },
      
      {
        id: 8,
        image: Austin,
        title: "Eco-Friendly Tiny Home",
        location: "Austin, Texas",
        date: "2023-11-07",
        pricePerNight: 85,
        rating: 4.4,
        isGuestFavorite: false,
      },
      {
        id: 9,
        image: Vegas,
        title: "Luxury Penthouse with City Views",
        location: "Las Vegas, Nevada",
        date: "2023-11-10",
        pricePerNight: 220,
        rating: 4.8,
        isGuestFavorite: true,
      },
      {
        id: 10,
        image: Savannah,
        title: "Historic Townhouse",
        location: "Savannah, Georgia",
        date: "2023-11-12",
        pricePerNight: 140,
        rating: 4.6,
        isGuestFavorite: false,
      },
      {
        id: 11,
        image: Denver,
        title: "Ski-In/Ski-Out Lodge",
        location: "Denver, Colorado",
        date: "2023-11-15",
        pricePerNight: 160,
        rating: 4.9,
        isGuestFavorite: true,
      },
      {
        id: 12,
        image: SanDiego,
        title: "Ocean Breeze Studio",
        location: "San Diego, California",
        date: "2023-11-17",
        pricePerNight: 125,
        rating: 4.7,
        isGuestFavorite: false,
      },
      {
        id: 13,
        image: Nashville,
        title: "Country Farmhouse",
        location: "Nashville, Tennessee",
        date: "2023-11-20",
        pricePerNight: 95,
        rating: 4.5,
        isGuestFavorite: true,
      },
      {
        id: 14,
        image: Boston,
        title: "Cozy Colonial House",
        location: "Boston, Massachusetts",
        date: "2023-11-22",
        pricePerNight: 115,
        rating: 4.6,
        isGuestFavorite: false,
      },
      {
        id: 15,
        image: Honolulu,
        title: "Beach Bungalow Paradise",
        location: "Honolulu, Hawaii",
        date: "2023-11-25",
        pricePerNight: 200,
        rating: 5.0,
        isGuestFavorite: true,
      },

      {
        id: 16,
        image: Thailand,
        title: "Tropical Seaside Cottage",
        location: "Phuket, Thailand",
        date: "2023-11-25",
        pricePerNight: 180,
        rating: 4.9,
        isGuestFavorite: true,
      }
  ];
  
  export default function Main() {
    return (
<div className="main">
    {listings.map((listing) => (
        <div key={listing.id} className='main__items'>
<img src={listing.image} alt={listing.title} className="main__image" />
<div className="main__details">
<h2 className="main__title">{listing.title}</h2>
<div className="main__rating-container">
<img src={Star} alt="Star" className="main__star" />
<p className="main__rating">{listing.rating}</p>
</div>
</div>
<h3 className="main__location">{listing.location}</h3>
<p className="main__date">{listing.date}</p>
<p className="main__price"><span class='black'>${listing.pricePerNight} </span> per night</p>
{listing.isGuestFavorite && <span className="main__favorite">Guest Favorite</span>}
<img src={Heart} alt="Heart" className="main__heart" /> 
<div className="container">
  <div className="photos"></div>
  <div className="photos"></div>
  <div className="photos"></div>
  <div className="photos"></div>
  <div className="photos"></div>
</div >
</div>
    ))}
   
  </div>
    )
  }