import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  // llave primaria y autonumérica
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  // permite texto largo
  @Column('text')
  description: string;

  @Column()
  author: string;

  @Column()
  publisher: string;

  @Column()
  pages: number;

  @Column()
  image_url: string;
}
