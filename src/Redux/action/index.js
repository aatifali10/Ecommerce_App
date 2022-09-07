export const addcart = (product) => {
  return {
    type: "ADDITEMS",
    payload: product,
  };
};

export const delcart = (product) => {
  return {
    type: "DELITEMS",
    payload: product,
  };
};
