import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.model';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column('varchar', {
        length: 64,
        nullable: false
    })
    public title!: string;

    @Column('varchar', {
        length: 643,
        nullable: false
    })
    public title2!: string;

    @Column('text', {
        nullable: false
    })
    public content!: string;

    @CreateDateColumn()
    public createdAt!: Date;

    @ManyToOne(() => User, (user) => user.articles)
    public owner!: User;
}
