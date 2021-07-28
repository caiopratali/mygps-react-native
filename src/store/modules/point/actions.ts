export const addPoint = (item: string) => {
  return {
    type: 'ADD_POINT',
    payload: {
      item,
    },
  };
};
