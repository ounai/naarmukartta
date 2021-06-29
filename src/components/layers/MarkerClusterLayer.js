import MarkerClusterGroup from 'react-leaflet-markercluster';

import MarkerLayer from './MarkerLayer';

const MarkerClusterLayer = ({ data, provider }) => (
  <MarkerClusterGroup disableClusteringAtZoom={provider.disableClusteringAtZoom}>
    <MarkerLayer data={data} provider={provider} />
  </MarkerClusterGroup>
);

export default MarkerClusterLayer;

