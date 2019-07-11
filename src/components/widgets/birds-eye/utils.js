const divmod = (n, d) => {
  const div = Math.trunc(n / d);
  const rem = n % d;
  return [div, rem];
};

const isValidCollection = (value) => {
  let valid = true;
  value.forEach((item) => {
    if (item.offsets === undefined) {
      valid = false;
      return;
    }
    item.offsets.forEach((offset) => {
      if (!Array.isArray(offset) || offset.length !== 2) {
        valid = false;
        return;
      }
      if (!Number.isInteger(offset[0]) || !Number.isInteger(offset[1])) {
        valid = false;
        return;
      }
      if (offset[0] >= offset[1]) {
        valid = false;
      }
    });
  });
  return valid;
};

export default {
  divmod,
  isValidCollection,
};
