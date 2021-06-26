import { L } from 'leaflet';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

const OSMBaseLayer = () => (
  <LayersControl.BaseLayer name="OpenStreetMap" checked>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </LayersControl.BaseLayer>
);

const Map = ({ style, children }) => {
  const defaultPosition = [60.2174829, 24.8095368];
  const defaultZoom = 13;

  return (
    <MapContainer center={defaultPosition} zoom={defaultZoom} style={style}>
      <LayersControl position="topright">
        <OSMBaseLayer />
        
        {children}
      </LayersControl>
    </MapContainer>
  );
};

export default Map;

