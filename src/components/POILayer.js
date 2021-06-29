import { LayersControl, LayerGroup } from 'react-leaflet';

import MarkerLayer from './layers/MarkerLayer';
import CircleMarkerLayer from './layers/CircleMarkerLayer';
import MarkerClusterLayer from './layers/MarkerClusterLayer';
import CircleMarkerClusterLayer from './layers/CircleMarkerClusterLayer';

const POILayerContent = props => {
  const { provider } = props;

  if (provider.type === 'marker') return <MarkerLayer {...props} />;
  else if (provider.type === 'circlemarker') return <CircleMarkerLayer {...props} />;
  else if (provider.type === 'markercluster') return <MarkerClusterLayer {...props} />;
  else if (provider.type === 'circlemarkercluster') return <CircleMarkerClusterLayer {...props} />;
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

