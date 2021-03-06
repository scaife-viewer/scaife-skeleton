import HomerWidget from './homer/HomerWidget.vue';
// import MorphologyWidget from './morpheus/MorphologyWidget.vue';
import ReaderWidget from './reader/ReaderWidget.vue';
import HomerReaderWidget from './reader/HomerReaderWidget.vue';
import HomerGridReaderWidget from './reader/HomerGridReaderWidget.vue';
import HomerParallelReaderWidget from './reader/HomerParallelReaderWidget.vue';
import SelectedTextInfoWidget from './reader/SelectedTextInfoWidget.vue';

import BookInfoWidget from './morphgnt/BookInfoWidget.vue';
import BookSelectWidget from './morphgnt/BookSelectWidget.vue';
import InterlinearWidget from './morphgnt/InterlinearWidget.vue';
import PassageWidget from './morphgnt/PassageWidget.vue';
import SelectablePassageWidget from './morphgnt/SelectablePassageWidget.vue';

import OpenSeadragonWidget from './image/OpenSeadragonWidget.vue';

import ToggleVisibilityWidget from '../../demos/visibility/ToggleVisibilityWidget.vue';

const widgets = [
  HomerWidget,
  // MorphologyWidget,
  ReaderWidget,
  HomerReaderWidget,
  HomerGridReaderWidget,
  HomerParallelReaderWidget,
  SelectedTextInfoWidget,

  BookInfoWidget,
  BookSelectWidget,
  InterlinearWidget,
  PassageWidget,
  SelectablePassageWidget,

  OpenSeadragonWidget,

  ToggleVisibilityWidget,
];

export default widgets;
