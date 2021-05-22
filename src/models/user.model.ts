import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Article } from './articles.model';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column('varchar')
    public password!: string;

    @Column('varchar', {
        length: 255,
        nullable: false
    })
    public firstName!: string;

    @CreateDateColumn()
    public createdAt!: Date;

    @UpdateDateColumn()
    public editionDate!: Date;

    @DeleteDateColumn()
    public deletionDate!: Date;

    @Column('varchar', {
        length: 64,
        nullable: false
    })
    public lastName!: string;

    @OneToMany(() => Article, (art) => art.owner)
    public articles!: Article[];

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    @BeforeInsert()
    public beforeInsert() {
        console.log('Je suis appellé avant l\'insertion', this);
    }
}
