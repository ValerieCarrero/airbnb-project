import Star from '../assets/icons/star.png';
import Heart from '../assets/icons/heart.png';

export default function ListingCard({listing}) {
    return (
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
    <p className="main__price"><span className='black'>${listing.pricePerNight} </span> per night</p>
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
    )}