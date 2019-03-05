# MorphGNT Scaife Widgets

## BookInfoWidget

### Routes

* `morphgnt` - expects a route named `morphgnt` to exist

### Store

#### State

* `book` - the selected book is expected to be found at the `book` key which has `first_paragraph`, `first_sentence`, and `first_word` keys that are urls to the endpoints to fetch that information.  It also has a `name` key that is the title of the `book`.  Lastly, it has an `@id` property that is the unique identifier for the `book`.

### Style

The widget is wrapped in a `book-info` class.  Each link has a `click` class.


## BookSelectWidget

### Routes

* `morphgnt` - expects a route named `morphgnt` to exist

### Store

#### State

* `books` - a list of `book` objects to be found at the `books` key.

### Style

The widget has a `book-select` class on a `div` wrapping a `ul > li > a` structure.  Each link has a `click` class.


## InterlinearWidget

### Store

#### Actions

* `toggleInterlinear` - dispatches a single action, `toggleInterlinear` with no props.

### Style

It's a single `div` with the class `interlinear` that contains a div with the class `click` on it.


## PassageWidget

### Store

#### Actions

* `selectedWord` - dispatches this when a word is clicked on and sends the entire `word` object

#### State

* `passage` - the selected passage

* `interlinear` - show interlinear or not

* `readerTextSize` - what is the selected text size

### Style

TBD
