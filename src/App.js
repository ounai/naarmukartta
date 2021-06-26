import './App.css';

import providers from './providers';

import Map from './components/Map';
import POIProvider from './components/POIProvider';

const App = () => (
  <Map style={{
    width: '100%',
    height: '100vh'
  }}>
    {providers.map(provider => (
      <POIProvider key={provider.name} provider={provider} />
    ))}
  </Map>
);

export default App;

