<template>
  <div class="homer-birds-eye-widget">
    <BirdsEye
    v-for="(bookLength, bookIndex) in books"
    :key="bookIndex"
    :offset-collection="bookCollection(bookIndex)"
    :total-words="bookLength"
    :precomputed-line-length="1000"
    />
  </div>
</template>

<script>
import BirdsEye from '../../components/widgets/birds-eye/BirdsEye.vue';
import { iliadBookLengths, iliadNgrams } from '../homer';

export default {
  scaifeConfig: {
    displayName: 'Homer NGrams Birds Eye',
    singleton: true,
    location: 'main',
  },
  components: { BirdsEye },
  computed: {
    books() {
      return iliadBookLengths;
    },
    ngrams() {
      return iliadNgrams.map(ngram => {
          return {
              text: ngram[0],
              offsets: ngram[1]
          };
      });
    }
  },
  methods: {
    bookCollection(bookIndex) {
      const bookNumber = bookIndex + 1;
      // startBook, startLine, startOffset, endBook, endLine, endOffset
        // export const iliadNgrams = [
        // ['εὕδεις Ἀτρέος υἱὲ δαΐφρονος ἱπποδάμοιο οὐ χρὴ παννύχιον εὕδειν βουληφόρον ἄνδρα ᾧ λαοί τʼ ἐπιτετράφαται καὶ τόσσα μέμηλε νῦν δʼ ἐμέθεν ξύνες ὦκα Διὸς δέ τοι ἄγγελός εἰμι ὃς σεῦ ἄνευθεν ἐὼν μέγα κήδεται ἠδʼ ἐλεαίρει θωρῆξαί σε κέλευσε κάρη κομόωντας Ἀχαιοὺς πανσυδίῃ νῦν γάρ κεν ἕλοις πόλιν εὐρυάγυιαν Τρώων οὐ γὰρ ἔτʼ ἀμφὶς Ὀλύμπια δώματʼ ἔχοντες ἀθάνατοι φράζονται ἐπέγναμψεν γὰρ ἅπαντας Ἥρη λισσομένη Τρώεσσι δὲ κήδεʼ ἐφῆπται ἐκ Διός ἀλλὰ σὺ σῇσιν ἔχε', [  // 1
        //     [2, 23, 0, 2, 33, 600],
        //     [2, 60, 0, 2, 70, 545],
        // ]],
      return this.ngrams
        .filter(ngram => {
            return ngram.offsets.filter(offset => offset[0] === bookNumber).length === ngram.offsets.length;
        })
        .map(ngram => {
            ngram.offsets = [...ngram.offsets.map(offset => {
                const [startBook, startLine, startOffset, endBook, endLine, endOffset] = offset;
                return [startLine, startOffset, endLine, endOffset];
            })];
            return ngram;
        });
    },
  }
}
</script>

<style lang="scss">
  @import "../../variables.scss";

  .homer-birds-eye-widget {
      display: flex;
      .birds-eye {
          width: 50px;
          padding: 0 3px;
      }
  }
</style>
