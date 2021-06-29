import MarkerClusterGroup from 'react-leaflet-markercluster';

import CircleMarkerLayer from './CircleMarkerLayer';

const CircleMarkerClusterLayer = ({ data, provider }) => (
  <MarkerClusterGroup disableClusteringAtZoom={provider.disableClusteringAtZoom}>
    <CircleMarkerLayer data={data} provider={provider} />
  </MarkerClusterGroup>
);

export default CircleMarkerClusterLayer;

