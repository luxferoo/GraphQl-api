# graphQl-api
GraphQL API in nodejs (user management, CRUD) Using Sequelize, jsonwebtoken and itranslator

More informations about [itranslator](https://www.npmjs.com/package/itranslator)

## Configuration
1- Go to [ROOT]/config/config.json and put your JWT and database configurations

> config.json
```json
{
  "jwt": {
    "expiresIn": "1h",
    "secret": "secret_key"
  },
  "db": {
    "development": {
      "username": "luxfero",
      "password": "password",
      "database": "gift_dev",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "logging": false,
      "operatorsAliases": false,
      "port": 5432
    },
    "production": {
      "username": "luxfero",
      "password": "password",
      "database": "gift_production",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "logging": false,
      "operatorsAliases": false,
      "port": 5432
    }
  }
}

```
2- Run yarn to install dependencies OR npm install.
```
yarn
```

```
npm install
```
3- Create the database using the below command :
```
yarn create:tables
```
or
```
npm run create:tables
```

4- start the server and go to [http://127.0.0.1:3000/graphql](http://127.0.0.1:3000/graphql)
(if you are using a windows machine put "start:w" instead of "start")

```
yarn start
```
or
```
npm run start
```

you should something like this :
![home](https://user-images.githubusercontent.com/17208637/49508722-57a69180-f87b-11e8-85a5-d40a644acc9f.png)

## Usage
1 - example of registering & login

![home](https://user-images.githubusercontent.com/17208637/49508738-5d9c7280-f87b-11e8-818f-bbe8a1f3178d.png)
![home](https://user-images.githubusercontent.com/17208637/49508747-642aea00-f87b-11e8-9d52-68d997543a44.png)

# IMPORTANT ! (you should know)

- If you want to create Commands you should implement your database + you should send the JWT in the header headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {token}',
}
- Graphiql doesn't provide a way to add the bearer token to the header you should use another tool to do that or you can just go to [ROOT]/middlewares/security.js and hardcode your token :

```node
    import models from '../models';
import jwt from 'jsonwebtoken';

const jwtConf = require('../config/config.json').jwt;

export default {
    getUser(context, req, _, next) {
        //const token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : null;
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhI...";
        context.user = null;
        jwt.verify(token, jwtConf.secret, function (err, decoded) {
            if (err)
                next();
            if (decoded)
                models.User.findOne({where: {id: decoded.data.user, blocked: false}}).then(user => {
                    if (user)
                        context.user = user;
                    next();
                }).catch(() => {
                    next();
                })
        });
    }
}
```
