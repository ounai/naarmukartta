import { useMemo } from 'react';

import { Marker, Popup } from 'react-leaflet';

const PopupContent = ({ poi, provider }) => {
  const popupContents = [];

  for (const key in provider.popupContent) {
    popupContents.push(
      <div key={key}>
        <strong>{key}:</strong> {
          typeof(provider.popupContent[key]) === 'string'
            ? poi[provider.popupContent[key]]
            : provider.popupContent[key](poi)
        }
      </div>
    );
  }

  return (
    <>
      <strong>
        {poi[provider.popupHeader]}
      </strong>

      <hr />

      {popupContents}
    </>
  );
};

const MarkerLayer = ({ data, provider }) => {
  const markers = useMemo(() => data.map(poi => (
    <Marker
      key={provider.getKey(poi)}
      position={provider.getPosition(poi)}
    >
      {provider.enablePopups && (
        <Popup>
          <PopupContent poi={poi} provider={provider} />
        </Popup>
      )}
    </Marker>
  )), [data, provider]);

  return markers;
};

export default MarkerLayer;

