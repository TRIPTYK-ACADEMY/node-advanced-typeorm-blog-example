import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/user.model';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    lastSubscribedUser() {
        return this.findOne({
            order : {
                createdAt : 'DESC'
            }
        });
    }
}
