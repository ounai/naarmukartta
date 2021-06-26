import { useMap, useMapEvents, MapContainer, LayersControl } from 'react-leaflet';

import config from '../config';
import { savePosition, loadPosition } from '../services/map';

import BaseLayers from './BaseLayers';

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

const Map = ({ style, children }) => {
  const { position, zoom } = loadPosition(config.map.defaultPosition, config.map.defaultZoom);

  return (
    <MapContainer center={position} zoom={zoom} style={style}>
      <PositionSaver />

      <LayersControl position="topright">
        <BaseLayers />
        
        {children}
      </LayersControl>
    </MapContainer>
  );
};

export default Map;

