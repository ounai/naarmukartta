import { useMemo } from 'react';

import { CircleMarker } from 'react-leaflet';

import POIInfoPopup from '../POIInfoPopup';

const CustomCircleMarker = ({ poi, provider }) => {
  const resolvedProps = {};

  for (const key in provider.circleMarkerOptions) {
    const value = provider.circleMarkerOptions[key];

    if (typeof(value) === 'function') resolvedProps[key] = value(poi);
    else resolvedProps[key] = value;
  }

  return (
    <CircleMarker
      center={provider.getPosition(poi)}
      {...resolvedProps}
    >
      {provider.enablePopups && <POIInfoPopup poi={poi} provider={provider} />}
    </CircleMarker>
  )
};

const CircleMarkerLayer = ({ data, provider }) => {
  const markers = useMemo(() => data.map(poi => 
    <CustomCircleMarker
      key={provider.getKey(poi)}
      poi={poi}
      provider={provider}
    />
  ), [data, provider]);

  return markers;
};

export default CircleMarkerLayer;

