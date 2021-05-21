import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column('varchar')
    public password!: string;

    @Column('varchar', {
        length: 64,
        nullable: false
    })
    public firstName!: string;

    @Column('varchar', {
        length: 64,
        nullable: false
    })
    public lastName!: string;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
