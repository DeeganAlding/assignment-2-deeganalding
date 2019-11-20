module.exports = (app, fetch) => {
    app.get('/film', (req, res) => {
        fetch('https://gist.githubusercontent.com/DeeganAlding/33fee857c822937cce254452159ddb15/raw/4893b288bd6aad78fc230dd6151fd13c013b2108/data.json')
            .then(res => res.json())
            .then(data => {
                res.render('film', {
                    data: data,
                })
            })
            .catch(err => console.log(err))
    })
}