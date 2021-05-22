import {
EntitySubscriberInterface,
EventSubscriber,
InsertEvent
} from 'typeorm';

@EventSubscriber()
export class AllSubscriber implements EntitySubscriberInterface<any> {
    beforeInsert(event: InsertEvent<any>) {
        console.log('SOMETHING IS INSERTED: ', event.entity);
    }
}
