module.exports = app => {
    const save = (req, res) => {
        res.send('User Saved')
    }

    return { save }
}