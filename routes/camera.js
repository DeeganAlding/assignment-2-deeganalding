module.exports = (app, fetch) => {
    app.get('/camera', (req, res) => {
        fetch('https://gist.githubusercontent.com/DeeganAlding/62b6a1145abc4db6c0e62abda0d94e83/raw/99f88e8d6cf406517aef39a03fcffd4268558cbd/Camera%2520JSON')
            .then(res => res.json())
            .then(data => {
                res.render('camera', {
                    data: data,
                })
            })
            .catch(err => console.log(err))
    })
}