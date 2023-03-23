var axios = require('axios')

module.exports.list = () => {
    return axios.get('http://localhost:3000/tasks')
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.Register = (task) => {
    return axios.post('http://localhost:3000/alunos/tasks', task)
            .then(resposta => {
                return axios.get('http://localhost:3000/tasks')
                .then(resposta => {
                    return resposta.data
                })
                .catch(erro => {
                    return erro
                })
            })
            .catch(erro => {
                return erro
            })
}

module.exports.UpdatePage = (id) => {
    return axios.post('http://localhost:3000/tasks/' +id)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.UpdatePost = (task, id) => {
    return axios.put('http://localhost:3000/alunos/' + id, task)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.Done = ( id) => {
    return axios.get('http://localhost:3000/tasks/' + id)
            .then(resposta => {
                task = resposta.data
                task.Done = 1
                return axios.put('http://localhost:3000/tasks/' + id, task)
                    .then(resposta => {
                        return axios.get('http://localhost:3000/tasks')
                            .then(resposta => {
                                return resposta.data
                            })
                            .catch(erro => {
                                return erro
                            })
                    })
                    .catch(erro => {
                        return erro
                    })
            })
            .catch(erro => {
                return erro
            })
}



