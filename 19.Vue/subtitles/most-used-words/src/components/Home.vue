<template>
    <v-container fluid>
        <v-form>
            <v-file-input label="Select the subtitles" prepend-icon="mdi-message-text" outlined
            append-outer-icon="mdi-send"
            multiple chips v-model="files"
            @click:append-outer="processSubtitles">

            </v-file-input>
        </v-form>
        <div class="pills">
            <Pill v-for="word in groupedWords" :key="word.name"
            :name="word.name" :amount="word.amount"/>
        </div>
    </v-container>
</template>

<script>
import Pill from './Pill'

export default {
    components: {Pill},
    data: function(){
    return{
        files: [],
        groupedWords: [
            { name: 'you', amount: 990 },
            { name: 'he', amount: 670 },
            { name: 'i', amount: 630 },
        ]
    }
    },
    methods: {
        processSubtitles() {
            console.log(this.files)
        }
    }
}
</script>

<style>
    .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
    }
</style>