import { config } from 'dotenv';
import { createConnection } from 'typeorm';
import { app } from './app.bootstrap';
import { Article } from './models/articles.model';
import { User } from './models/user.model';
import { AllSubscriber } from './subscribers/all.subscriber';
import { UserSubscriber } from './subscribers/user.subscriber';

config({path:'variables.env'});


const init = async () =>{
    const connection = await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'test123*',
        database: 'blog',
        logging: true,
        maxQueryExecutionTime: 1000,
        entities :  [User, Article],
        subscribers : [UserSubscriber, AllSubscriber]
    });

    app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`app listening on port ${process.env.PORT}`);
});
};


init();