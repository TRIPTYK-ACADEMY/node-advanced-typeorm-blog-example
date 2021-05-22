/* eslint-disable import/no-default-export */
import Faker from 'faker';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Article } from '../../models/articles.model';
import { User } from '../../models/user.model';

export default class CreateMain implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const writers = await factory(User)().createMany(10);

        await factory(Article)().map(async a => {
            a.owner = Faker.helpers.randomize(writers);
            return a;
        }).createMany(30);
    }
}
