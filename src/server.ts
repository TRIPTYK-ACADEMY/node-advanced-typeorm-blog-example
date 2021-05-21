import { config } from 'dotenv';
import { createConnection } from 'typeorm';
import { app } from './app.bootstrap';
import { User } from './models/user.model';

config({path:'variables.env'});


const init = async () =>{
    const connection = await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'test123*',
        database: 'todo_list',
        entities :  [User],
        synchronize: true
    });

    const userRepository = connection.getRepository(User);

    const users = await userRepository.findOne(1, {
        select: ['firstName'],
        order: {
            firstName: 'ASC'
        }
    });

    console.log(users);

    app.listen(process.env.PORT, ()=>{
        // eslint-disable-next-line no-console
        console.log(`app listening on port ${process.env.PORT}`);
    });
};


init();