const fetch = require('node-fetch')

function convert(req, res) {
    let url = 'https://economia.awesomeapi.com.br/json/' + req.params.moeda
    fetch(url)
    .then( (dado) => {
        return dado.json()
    })
    .then( (rows) =>{
        res.json(rows)
    })

}

module.exports = {obterConvet}