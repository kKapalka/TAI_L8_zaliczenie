'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';

const postEndpoint = (router) => {
    router.get('/posts', async (request, response, next) => {
        try {
            let result = await business(request).getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/posts/:id', async (request, response, next) => {
        try {
            let result = await business(request).getPostManager().get(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/posts', async (request, response, next) => {
        try {
            console.log(request.body);
            let result = await business(request).getPostManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/posts/:id', async (request, response, next) => {
        try {
            console.log(request.body);
            let result = await business(request).getPostManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};

export default postEndpoint;