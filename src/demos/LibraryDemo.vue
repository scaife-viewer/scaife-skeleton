<template>
  <section class="main">
    <div class="container">
      <Library />
    </div>
  </section>
</template>

<script>
import Library from '../components/widgets/library/Library.vue';

export default {
  components: { Library },
}
</script>

<style lang="scss">
@import "../variables.scss";
@import "../breakpoints.scss";

// borrowed from bootstrap
.container {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}
.input-group>.custom-file, .input-group>.custom-select, .input-group>.form-control, .input-group>.form-control-plaintext {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.input-group {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
}
// end bootstrap

.work-list {
  .form-group {
    margin-bottom: 50px;
  }
  .work {
    margin-top: 2em;
    h3 {
      font-family: 'Noto Serif';
      font-weight: normal;
      font-style: italic;
    }
  }
  margin-bottom: 50px;
}

.card-deck {
  .card {
    @include media-breakpoint-up(sm) {
      min-width: 330px;
    }
    @include media-breakpoint-up(md) {
      flex-grow: 0;
    }
    @include media-breakpoint-up(lg) {
      min-width: 450px;
    }
    @include media-breakpoint-up(xl) {
      min-width: 350px;
    }
  }
}

.version-card {
  @extend .card;

  margin-top: 10px;
  margin-bottom: 10px;

  .text-subtype {
    margin: 0;
    color: $gray-600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  .card-title {
    font-size: 14pt;
    font-weight: bold;

    a {
      color: $black;
      &:hover {
        color: $link-color;
        text-decoration: none;
      }
    }
  }

  .card-text {
    font-family: 'Noto Serif';
    font-style: italic;
    color: $text-muted;
    font-size: 10pt;
    line-height: 14pt;
  }

  .card-footer {
    font-size: 11pt;
    text-align: center;
    a:hover {
      text-decoration: none;
    }
  }
}

body.library section.main {
  h2 {
    font-size: 18px;
    color: $gray-600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
}

.library-component {
  margin: 10px 0 100px;

  .controls {
    display: flex;
    justify-content: space-between;

    .toggle-all {
      font-size: 14px;
      color: $gray-500;
      span {
        color: $gray-600;
        cursor: pointer;
        &:hover {
          color: $black;
        }
      }
    }
    .sort {
      font-size: 14px;
      color: $gray-500;
      span {
        cursor: pointer;
        color: $gray-600;
        &.active {
          color: $black;
          &:hover {
            color: $black;
          }
        }
        &:hover {
          color: $gray-700;
        }
      }
    }
  }
  .text-groups {
    margin-top: 15px;
    .text-group {
      font-family: 'Noto Serif';
      &.open {
        h4 {
          font-weight: bold;
        }
      }
      h4 {
        margin: 10px 0 0;
        display: flex;
        font-size: 20px;
        .toggle {
          font-size: 16px;
          line-height: 24px;
          width: 25px;
          .open-toggle {
            color: $gray-400;
          }
          &:hover .open-toggle {
            color: $gray-600;
          }
        }
        .label {
          width: 35%;
        }
        .urn {
          padding-left: 25px;
          width: 40%;
          font-family: monospace;
          font-size: 14px;
          line-height: 26px;
          color: $gray-700;
        }
      }
      .works {
        margin: 0 0 15px 0;
        .work {
          &:hover {
            background: $gray-200;
            .versions {
              display: block;
            }
          }
          display: flex;
          flex-wrap: wrap;
          .filler {
            width: 25px;
          }
          .label {
            width: 35%;
          }
          .urn {
            padding-left: 25px;
            width: 400px;
            font-family: monospace;
            font-size: 14px;
            line-height: 26px;
            color: $gray-600;
          }
          .versions {
            padding-left: 25px;
            display: none;
            line-height: 26px;
            font-family: 'Noto Sans';
            .badge {
              font-weight: normal;
              margin-top: 4px;
              vertical-align: top;
              &:hover {
                background: $perseus-red;
                color: $white;
              }
            }
          }
        }
      }
    }
  }
  .flat-work-list {
    margin-top: 15px;
    .work {
      margin-top: 8px;
      font-family: 'Noto Serif';
      &:hover {
        background: $gray-200;
        .versions {
          display: block;
        }
      }
      display: flex;
      flex-wrap: wrap;
      .label {
        padding-left: 25px;
        width: 300px;
        line-height: 24px;
      }
      .text-group {
        padding-left: 25px;
        width: 400px;
        line-height: 24px;
      }
      .urn {
        padding-left: 25px;
        width: 300px;
        font-family: monospace;
        font-size: 14px;
        line-height: 26px;
        color: $gray-600;
      }
      .versions {
        padding-left: 25px;
        display: none;
        line-height: 26px;
        font-family: 'Noto Sans';
        .badge {
          font-weight: normal;
          margin-top: 4px;
          vertical-align: top;
          &:hover {
            background: $perseus-red;
            color: $white;
          }
        }
      }
    }
  }
}

body.library {
  .popover-header {
    background: white;
    font-family: 'Noto Serif';
    padding: 6px 8px;
  }
  .popover-body {
    font-size: 12px;
    line-height: 14px;
    color: $gray-800;
    padding: 4px 8px;
  }
}

body.cts_text {
  .toc {
    margin: 10px 0;
    h3 {
      font-size: 18px;
      font-family: 'Noto Serif';
    }
  }
}
</style>
