import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons/faPlusSquare';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons/faMinusCircle';

import faExpand from './faExpand';
import faCompress from './faCompress';

const iconMap = [
  faArrowLeft,
  faArrowRight,
  faExpand,
  faCog,
  faCompress,
  faChevronDown,
  faChevronRight,
  faMinusCircle,
  faSquare,
  faPlusSquare,
  faCheckSquare,
].reduce((map, obj) => {
  // eslint-disable-next-line no-param-reassign
  map[obj.iconName] = obj;
  return map;
}, {});

export default iconMap;
