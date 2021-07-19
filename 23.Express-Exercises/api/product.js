module.exports = (app, text) => {
    function save(req, res){
        res.send('Product > Save > ' + text)
    }

    function obtain(req, res){
        res.send('Product > Obtain > ' + text)
    }

    app.post('/product', save)
    app.get('/product', obtain)

    return {save, obtain}
}