import Maps from '../assets/icons/map.png';

export default function Map() {
    return (
        <div className="map-container">
        <div  className="map-button">
<span className="map-text">Show map</span>
<img src={Maps} alt="Map" className="map-image" />
            </div>
            </div>

    );
    }