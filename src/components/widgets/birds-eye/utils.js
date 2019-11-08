const divmod = (n, d) => {
  const div = Math.trunc(n / d);
  const rem = n % d;
  return [div, rem];
};

const isValidCollection = (value) => {
  let valid = true;

  value.forEach((item) => {
    if (item === undefined || item.offsets === undefined) {
      valid = false;
      return;
    }
    item.offsets.forEach((offset) => {
      if (!Array.isArray(offset) || !(offset.length === 2 || offset.length === 4)) {
        valid = false;
        return;
      }
      if (!Number.isInteger(offset[0]) || !Number.isInteger(offset[1])) {
        valid = false;
        return;
      }
      if (offset.length === 4 && (!Number.isInteger(offset[2]) || !Number.isInteger(offset[3]))) {
        valid = false;
        return;
      }
      if (offset.length === 2 && offset[0] > offset[1]) {
        valid = false;
        return;
      }
      if (offset.length === 4 && offset[0] > offset[2]) {
        valid = false;
      }
    });
  });
  return valid;
};

const areValidSections = (value) => {
  let valid = true;
  value.forEach((section) => {
    if (!Array.isArray(section)) {
      valid = false;
    }
    section.forEach((subsection) => {
      if (subsection.highlight === undefined || subsection.id === undefined) {
        valid = false;
      }
    });
  });
  return valid;
};

export default {
  divmod,
  isValidCollection,
  areValidSections,
};
