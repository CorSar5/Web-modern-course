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
const {ipcRenderer} = window.require('electron')

export default {
    components: {Pill},
    data: function(){
    return{
        files: [],
        groupedWords: []
    }
    },
    methods: {
        processSubtitles() {
            const paths = this.files.map(f => f.path)
            ipcRenderer.send('process-subtitles', paths)
            ipcRenderer.on('process-subtitles', (event, resp) => {
                this.groupedWords = resp
            })
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