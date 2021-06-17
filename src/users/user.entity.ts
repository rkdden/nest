import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_no: number;

    @Column({ type: "varchar", length: 100})
    user_email: string;

    @Column({ type: 'varchar', length: 20})
    user_tel: string;

    @Column({ type: 'smallint', default: 10})
    user_level: string;

    @Column({ type: "varchar", length: 100})
    user_profile_image: string;

    @Column({ type: "varchar", length: 255})
    user_intro: string;

    @Column({ type: "varchar", length: 30})
    user_nick: string;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}