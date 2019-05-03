const express = require('express');
const helmet = require('helmet');
const server = express();

const projectsRouter = require('../routes/projects-route.js');
const actionsRouter = require('../routes/actions-route.js');

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;