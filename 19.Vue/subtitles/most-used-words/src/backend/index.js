const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitles', (event, paths) => {

    pathsToRows(paths)
        .then(rows => console.log(rows))
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