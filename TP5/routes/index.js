var express = require('express');
var router = express.Router();
Tasks = require('../controllers/tasks')

/* GET home page. */
router.get('(/|/tasks)', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.list()
  .then(tasks => {
    res.render('index', { task: tasks, d: data });
  })
  .catch(erro => {
    res.render('error', {error: erro, message: "Erro na obtenção da lista de tasks"})
  })
  
});

router.post('/|/tasks', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.Register(req.body)
    .then(tasks => {
      res.render('index', { task: tasks, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de tasks"})
    })
  
});

router.get('/tasks/Edit/:idTasks', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.UpdatePage(req.params.idTasks)
    .then(task => {
      res.render('edit', { task: task, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de tasks"})
    })
  
});

router.post('/tasks/Edit/:idTasks', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.UpdatePost(req.body,req.params.idTasks)
    .then(task => {
      res.render('edit', { task: task, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de tasks"})
    })
  
});

router.get('/tasks/Done/:idTasks', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.Done(req.params.idTasks)
    .then(tasks => {
      res.render('index', { task: tasks, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da task"})
    })
  
});

router.get('/tasks/Delete/:idTasks', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.Delete(req.params.idTasks)
    .then(tasks => {
      res.render('index', { task: tasks, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da task"})
    })
  
});

module.exports = router;