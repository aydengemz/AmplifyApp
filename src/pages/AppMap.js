import { createMap } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";


function AppMap() {

    async function initializeMap() {
        const map = await createMap({
            container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
            center: [-123.1187, 49.2819], // [Longitude, Latitude]
            zoom: 11,
        })
    }
    
  return (
    <div>
   
        <h1>AWS MAPS</h1>
        <button onClick={initializeMap}>Show Map</button>
        <div id="map"></div>
    </div>
  );
}

export default AppMap;

