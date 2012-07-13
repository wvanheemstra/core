var util = require('util');
   var persistence = require('./persistence/persistence').persistence;
   var persistenceStore = require('./persistence/persistence.store.mysql');
   var persistenceSync = require('./persistence/persistence.sync.server');

   var Task = persistence.define("Task", {
     name: "TEXT",
     done: "BOOL"
   });

   persistenceStore.config(persistence, 'localhost', 3306, 'tasks', 'root', '');
   persistenceSync.config(persistence);

   var session = persistenceStore.getSession();
   session.schemaSync();

   var app = require('express').createServer();

   app.get('/taskUpdates', function(req, res) {
     persistenceSync.pushUpdates(req.conn, req.tx, Task, req.query.since, function(updates){
       res.send(updates);
     });
   });

   app.listen(8000);
   console.log('Server running at http://localhost:8000/');