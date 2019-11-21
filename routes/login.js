module.exports = (app, fetch) => { 
    app.get('/', (req, res) => {
        message = 'Login'
        res.render('login', {
          message: message,
        })
       })

    app.post('/', (req, res) => {

      const {username, password} = req.body
      console.log(req.body)

      if (username === "user" && password === "P@ssw0rd123"){
        res.render('index')
      }
      else {
        message = "Incorrect username and password."
        res.render('login', {
          message: message
        })
      }
     })
  }
