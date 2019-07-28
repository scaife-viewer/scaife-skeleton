const divmod = (n, d) => {
  const div = Math.trunc(n / d);
  const rem = n % d;
  return [div, rem];
};

const isValidCollection = (value) => {
  let valid = true;
  console.log(value, 'is the value')
  value.forEach((item) => {
    if (item === undefined || item.offsets === undefined) {
      valid = false;

      console.log('invalid 0');
      return;
    }
    item.offsets.forEach((offset) => {
      if (!Array.isArray(offset) || !(offset.length === 2 || offset.length === 4)) {
        valid = false;
        console.log('invalid 1');
        return;
      }
      if (!Number.isInteger(offset[0]) || !Number.isInteger(offset[1])) {
        valid = false;
        console.log('invalid 2');
        return;
      }
      if (offset.length === 4 && (!Number.isInteger(offset[2]) || !Number.isInteger(offset[3]))) {
        valid = false;
        console.log('invalid 3');
        return;
      }
      if (offset.length === 2 && offset[0] > offset[1]) {
        valid = false;
        console.log('invalid 4');
        return;
      }
      if (offset.length === 4 && offset[0] > offset[2]) {
        valid = false;

        console.log('invalid 5');
      }
    });
  });
  return valid;
};

export default {
  divmod,
  isValidCollection,
};
