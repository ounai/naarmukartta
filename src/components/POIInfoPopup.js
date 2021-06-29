import { Popup } from 'react-leaflet';

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

const POIInfoPopup = ({ poi, provider }) => (
  <Popup>
    <PopupContent poi={poi} provider={provider} />
  </Popup>
);

export default POIInfoPopup;

