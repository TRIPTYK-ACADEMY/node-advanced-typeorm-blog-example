import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { User } from '../models/user.model';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
    listenTo() {
        // vous pouvez écouter sur plusieurs types d'entités à la fois
        return User;
    }

    beforeInsert(event: InsertEvent<User>) {
        console.log('BEFORE User INSERTED: ', event.entity);
    }
}
