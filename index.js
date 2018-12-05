import express from "express";
import graphQLHttp from "express-graphql";
import schema from "./schema";
import models from './models';
import security from './middlewares/security';
import lang from './middlewares/lang';

const app = express();

models.sequelize
    .authenticate()
    .then(() => {
        const context = {
            models
        };
        app.use(lang.bind(this,context));
        app.use(security.getUser.bind(this, context));
        app.use('/graphql', graphQLHttp({
            schema,
            context,
            graphiql: process.env.NODE_ENV === 'development',
            formatError(err) {
                return {
                    message: err.message,
                    path: err.path,
                };
            }
        }));
        let port = process.env.PORT || 4000;


        app.listen(port, () => {
            console.log(`\u{1b}[34m Server started on port: ${port}\u{1b}[0m `)
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
