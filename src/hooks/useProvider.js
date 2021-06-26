import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

const useProvider = provider => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const response = await axios.get(provider.location);

    setData(response.data);
    setLoading(false);
  }, [provider.location]);

  useEffect(() => fetchData(), [fetchData]);

  return [data, loading, fetchData];
};

export default useProvider;

