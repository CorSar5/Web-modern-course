function save(req,res){
    res.send('Save < User')
}

function obtain(req,res){
    res.send('User > Obtain')
}

module.exports = {save, obtain:obtain} //if you have the same name in both (key, value) you can omit it and only write it once(save)