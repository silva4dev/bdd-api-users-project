const User = require('../models/user')

let users = []

exports.index = (request, response) => {
    response.json(users).status(200)
}

exports.show = (request, response) => {
    const id = request.params.id
    const user = users.find((u) => u.id === id)
    if (user) {
        response.json(user).status(200)
    } else {
        response.status(404).json({ error: 'User not found' })
    }
}

exports.create = (request, response) => {
    const { name, email } = request.body
    const user = new User(name, email)
    users.push(user)
    response.json(user).status(200)
}

exports.update = (request, response) => {
    const id = request.params.id
    const user = users.find((u) => u.id === id)
    if (user) {
        const { name, email } = request.body
        Object.assign(user, { name, email })
        response.json(user).status(200)
    } else {
        response.status(404).json({ error: 'User not found' })
    }
}

exports.delete = (request, response) => {
    const id = request.params.id
    const index = users.findIndex((u) => u.id === id)
    if (index !== -1) {
        users.splice(index, 1)
        response.sendStatus(204)
    } else {
        response.status(404).json({ error: 'User not found' })
    }
}