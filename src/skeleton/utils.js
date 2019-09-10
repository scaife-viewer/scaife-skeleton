const displayName = (name) => {
  const isCallable = typeof name === 'function';
  return isCallable ? name() : name;
};

export default {
  displayName,
};
