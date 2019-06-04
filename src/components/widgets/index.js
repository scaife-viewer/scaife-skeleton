import HomerWidget from './homer/HomerWidget.vue';
// import MorphologyWidget from './morpheus/MorphologyWidget.vue';
import ReaderWidget from './reader/ReaderWidget.vue';
import HomerReaderWidget from './reader/HomerReaderWidget.vue';
import HomerGridReaderWidget from './reader/HomerGridReaderWidget.vue';
import HomerParallelReaderWidget from './reader/HomerParallelReaderWidget.vue';
import TextSizeWidget from './text-size/TextSizeWidget.vue';
import SelectedTextInfoWidget from './reader/SelectedTextInfoWidget.vue';
import TextWidthWidget from './text-width/TextWidthWidget.vue';

import BookInfoWidget from './morphgnt/BookInfoWidget.vue';
import BookSelectWidget from './morphgnt/BookSelectWidget.vue';
import InterlinearWidget from './morphgnt/InterlinearWidget.vue';
import PassageWidget from './morphgnt/PassageWidget.vue';
import SelectablePassageWidget from './morphgnt/SelectablePassageWidget.vue';

import OpenSeadragonWidget from './image/OpenSeadragonWidget.vue';

const widgets = [
  HomerWidget,
  // MorphologyWidget,
  ReaderWidget,
  HomerReaderWidget,
  HomerGridReaderWidget,
  HomerParallelReaderWidget,
  TextSizeWidget,
  SelectedTextInfoWidget,
  TextWidthWidget,

  BookInfoWidget,
  BookSelectWidget,
  InterlinearWidget,
  PassageWidget,
  SelectablePassageWidget,

  OpenSeadragonWidget,
];

export default widgets;
