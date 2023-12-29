import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
  @ApiProperty({example: 'La ciudad y los perros'})
  readonly title: string;

  @ApiProperty({example: 'Novela'})
  readonly genre: string;

  @ApiProperty({example: 'Esta edición del Ingenioso...'})
  readonly description: string;

  @ApiProperty({example: 'Mario Vargas Llosa'})
  readonly author: string;

  @ApiProperty({example: 'Santillana'})
  readonly publisher: string;

  @ApiProperty({example: '1232'})
  readonly pages: number;

  @ApiProperty({ example: 'www.imagen.com/quijote.png' })
  readonly image_url: string;
}