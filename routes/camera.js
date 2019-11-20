module.exports = (app, fetch) => {
    app.get('/film', (req, res) => {
        fetch('https://gist.githubusercontent.com/DeeganAlding/33fee857c822937cce254452159ddb15/raw/be389fe3d452d03f668d7ab5f5b111df68bdc6f5/data.json')
            .then(res => res.json())
            .then(data => {
                res.render('film', {
                    data: data,
                })
            })
            .catch(err => console.log(err))
    })
}