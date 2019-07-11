const divmod = (n, d) => {
  const div = Math.trunc(n / d);
  const rem = n % d;
  return [div, rem];
};

export default {
  divmod,
};
