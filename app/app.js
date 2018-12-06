'use strict';

import express from 'express';
import * as process from "babel-core/lib/transformation/file/options/config";

const app = express();


app.use(express.static('public'));


app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running!");
});