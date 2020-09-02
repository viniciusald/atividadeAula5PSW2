const express = require('express')
const app = express()
const obterMoeda = require('./models/conversaoModel')

//em estatico
app.get('/aluno/todos', (req, res) => {
    let alunos = [
        {'nome': 'vinicius'},
        {'nome': 'marcus'},
        {'nome': 'alves'}
    ]
    res.json(alunos)
})

//api terceiro
app.get('/moeda/:valor_real', conversaoModel.obterMoeda)

app.listen(3000)