const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')

ipcMain.on('process-subtitles', (event, paths) => {

    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => console.log(words))
        .then(() =>{
            event.reply('process-subtitles', [
                { name: 'you', amount: 990 },
                { name: 'he', amount: 670 },
                { name: 'i', amount: 630 },
                { name: 'she', amount: 670 },
                { name: 'our', amount: 930 },
                { name: 'Manuela', amount: 9930 },
            ])
        })
})