import { LayersControl, LayerGroup } from 'react-leaflet';

import MarkerLayer from './layers/MarkerLayer';
import MarkerClusterLayer from './layers/MarkerClusterLayer';

const POILayerContent = ({ data, provider }) => {
  if (provider.type === 'marker') return <MarkerLayer data={data} provider={provider} />;
  else if (provider.type === 'markercluster') return <MarkerClusterLayer data={data} provider={provider} />;
  else throw new Error(`Invalid POI type ${provider.type}!`);
};

const POILayer = ({ data, provider }) => (
  <LayersControl.Overlay name={provider.name} checked={!provider.disabledByDefault}>
    <LayerGroup>
      <POILayerContent data={data} provider={provider} />
    </LayerGroup>
  </LayersControl.Overlay>
);

export default POILayer;

