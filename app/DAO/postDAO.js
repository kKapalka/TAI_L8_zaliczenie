'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import mongoConverter from '../service/mongoConverter';
import applicationException from '../service/applicationException';

const postSchema = new mongoose.Schema({
    title: {type: String},
    url: {type: String},
    content: {type: String},
}, {
    collection: 'post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('post', postSchema);

function query() {
    return PostModel.find({}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function get(id) {
    return PostModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function createNewOrUpdate(data) {

        if (!data.id) {
            return new PostModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return PostModel.findOneAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }

}


export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,

    model: PostModel
};