import { TileLayer, LayersControl } from 'react-leaflet';

import config from '../../config';

const BaseLayer = ({ name, attribution, url, checked }) => (
  <LayersControl.BaseLayer name={name} checked={checked}>
    <TileLayer attribution={attribution} url={url} />
  </LayersControl.BaseLayer>
);

const BaseLayers = () => {
  const layers = [
    {
      name: 'OpenStreetMap',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  ];

  return layers.map(layer => (
    <BaseLayer
      key={layer.name}
      checked={config.map.defaultBaseLayer === layer.name}
      {...layer}
    />
  ));
};

export default BaseLayers;

