import { useMemo } from 'react';

import { Marker } from 'react-leaflet';

const MarkerLayer = ({ data, provider }) => {
  const markers = useMemo(() => data.map(poi => (
    <Marker
      key={provider.getKey(poi)}
      position={provider.getPosition(poi)}
    />
  )), [data, provider]);

  return markers;
};

export default MarkerLayer;

