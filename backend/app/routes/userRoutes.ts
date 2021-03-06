'use strict';
import express from 'express';
import * as User from '../controllers/userController';
import { verifyToken } from '../verifyToken';

export function userRoutes(app: express.Application) {

  // user Routes

  app.route('/')
  .get(User.getUsers);

  app.route('/users')
    .get(User.getUsers)
    .post(User.createUser);
    
    app.route('/users/:userId')
    .get(verifyToken, User.getUser)
    .put(verifyToken, User.updateUser)
    .delete(verifyToken, User.deleteUser);

  app.route('/login')
    .post(User.login);
};