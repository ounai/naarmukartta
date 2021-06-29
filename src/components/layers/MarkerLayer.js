import { useMemo } from 'react';

import { Marker } from 'react-leaflet';

import POIInfoPopup from '../POIInfoPopup';

const MarkerLayer = ({ data, provider }) => {
  const markers = useMemo(() => data.map(poi => (
    <Marker
      key={provider.getKey(poi)}
      position={provider.getPosition(poi)}
    >
      {provider.enablePopups && <POIInfoPopup poi={poi} provider={provider} />}
    </Marker>
  )), [data, provider]);

  return markers;
};

export default MarkerLayer;

