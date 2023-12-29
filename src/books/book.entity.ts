import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Book {
  @ApiProperty({ example: 99 })
  // llave primaria y autonumérica
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty({example: 'La ciudad y los perros'})
  @Column()
  title: string;
  
  @ApiProperty({example: 'Novela'})
  @Column()
  genre: string;

  @ApiProperty({example: 'Esta edición del Ingenioso...'})
  // permite texto largo
  @Column('text')
  description: string;

  @ApiProperty({example: 'Mario Vargas Llosa'})
  @Column()
  author: string;

  @ApiProperty({example: 'Santillana'})
  @Column()
  publisher: string;
  
  @ApiProperty({example: '1232'})
  @Column()
  pages: number;
  
  @ApiProperty({ example: 'www.imagen.com/quijote.png' })
  @Column()
  image_url: string;
}
