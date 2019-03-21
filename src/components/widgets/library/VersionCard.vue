<template>
    <div class="version-card">
        <div class="card-body">
            <p class="text-subtype">{{ text.kind }}</p>
            <h4 class="card-title"><a href @click.prevent="$emit('selectText', text)">{{ text.label }}</a></h4>
            <p class="card-text">{{ text.description }}</p>
        </div>
        <div class="card-footer">
            <a href @click.prevent="$emit('selectPassage', text.first_passage)"><icon name="book"></icon> Read ({{ text.human_lang }})</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style lang="scss">
    .version-card {
        min-width: 350px;
        flex-grow: 0;
        flex: 1 0 0%;
        display: flex;
        flex-direction: column;
        margin-right: 15px;
        margin-bottom: 0;
        margin-left: 15px;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;

        .text-subtype {
            margin: 0;
            color: #868e96;
            text-transform: uppercase;
            letter-spacing: .2em;
        }

        .card-body {
            flex: 1 1 auto;
            padding: 1.25rem;

            .card-title {
                margin-top: 0;
                font-size: 14pt;
                font-weight: 700;
                margin-bottom: .75rem;
                a {
                    text-decoration: none;
                }
            }
        }

        .card-footer {
            padding: .75rem 1.25rem;
            background-color: rgba(0,0,0,.03);
            border-top: 1px solid rgba(0,0,0,.125);
            a {
                text-decoration: none;
            }
        }
    }
</style>
