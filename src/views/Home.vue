<template>
    <div class="home">
        <label>
            <textarea cols="48" id="input" name="input" rows="16" v-model="inputText"></textarea>
        </label>
        <label>
            <textarea cols="48" id="output" name="output" rows="16" v-model="outputText"></textarea>
        </label>
    </div>
</template>

<script>
    import {randInt} from "@/utils";

    export default {
        name: "home",
        components: {},
        data() {
            return {
                inputText: '',
            }
        },
        computed: {
            outputText() {
                return this.deleteSwearwords(this.inputText)
            }
        },
        created() {
            this.$store.dispatch("getSwearwords")
        },
        methods: {
            deleteSwearwords(text) {
                let self = this;

                this.$store.state.swearwords.map(function (word) {
                    // text = text.replace(new RegExp(`${word}`, 'g'), self.$store.state.deletedWords[randInt(0, 1)])
                    text = text.replace(new RegExp(`${word}`, 'g'), function () {
                        return self.$store.state.deletedWords[randInt(0, 1)]
                    })
                });

                return text
            },
        }
    };
</script>

<style lang="scss">
    .home {
        margin: auto;
        display: flex;
        flex-direction: column;
    }
</style>