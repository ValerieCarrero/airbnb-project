import {listings} from "../data";
import ListingCard from "./ListingCard";  
  
  export default function Main() {
    return (
<div className="main">
    {listings.map((listing) => (
      <ListingCard key={listing.id} listing={listing} />
    ))
    }
  </div>
    );
  }