import useProvider from '../hooks/useProvider';

import POILayer from './POILayer';

const POIProvider = ({ provider }) => {
  if (!provider.name) throw new Error('Provider has no name!');
  if (!provider.location) throw new Error(`Provider ${provider.name} has no location!`);

  const [data, loading] = useProvider(provider);

  if (loading) return null;
  else return <POILayer data={data} provider={provider} />;
};

export default POIProvider;

