import { useMap, useMapEvents, MapContainer, TileLayer, LayersControl } from 'react-leaflet';

import config from '../config';
import { savePosition, loadPosition } from '../services/map';

import 'react-leaflet-markercluster/dist/styles.min.css';

const PositionSaver = () => {
  const map = useMap();

  const onMapMoved = event => savePosition(map.getCenter(), map.getZoom());

  useMapEvents({
    zoomend: onMapMoved,
    moveend: onMapMoved
  });

  return null;
};

const OSMBaseLayer = () => (
  <LayersControl.BaseLayer name="OpenStreetMap" checked>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </LayersControl.BaseLayer>
);

const Map = ({ style, children }) => {
  const { position, zoom } = loadPosition(config.defaultPosition, config.defaultZoom);

  return (
    <MapContainer center={position} zoom={zoom} style={style}>
      <PositionSaver />

      <LayersControl position="topright">
        <OSMBaseLayer />
        
        {children}
      </LayersControl>
    </MapContainer>
  );
};

export default Map;

