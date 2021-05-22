import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from '../../models/user.model';

define(User, () => {
    const gender = Faker.datatype.number(1);
    const firstName = Faker.name.firstName(gender);
    const lastName = Faker.name.lastName(gender);

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.password = 'test123*';
    return user;
});

