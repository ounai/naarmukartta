const savePosition = (position = null, zoom = null) => {
  const serializedPosition = JSON.stringify([position, zoom]);

  localStorage.setItem('mapPosition', serializedPosition);
};

const loadPosition = (defaultPosition = null, defaultZoom = null) => {
  const [position, zoom] = JSON.parse(localStorage.getItem('mapPosition')) ?? [defaultPosition, defaultZoom];

  return {
    position,
    zoom
  };
};

export {
  savePosition,
  loadPosition
};

