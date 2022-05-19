/** 
* Entrega 01 - Clase 02
* Alumno: Jo Repossi
* Backend: NodeJS
* Comisión 30995
* Profesor: Diego Jofre
* Fecha: Jueves 19 Mayo 2022
*/


class Usuario
{
  constructor ( nombre, apellido )
  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = []
    this.mascotas = []
  }

  /**
   * GET FULL NAME FN()
   * The function getFullName() returns the string "Nombre: " concatenated with the value of the nombre
   * property concatenated with the string " Apellido: " concatenated with the value of the apellido
   * property
   * @returns The full name of the person.
   */
  getFullName ()
  {
    return `Nombre: ${ this.nombre }  Apellido: ${ this.apellido }`;
  }


  /**
   * ADD MASCOTAS FN()
   * The function addMascota() takes a parameter nuevaMascota and adds it to the array mascotas
   * @param nuevaMascota - This is the new pet that we want to add to the list.
   * @returns The new object is being returned.
   */
  addMascota ( nuevaMascota )
  {
    return this.mascotas.push( nuevaMascota );
  }


  /**
   * COUNT MASCOTAS
   * The function countMascotas() returns the length of the array mascotas
   * @returns The length of the array.
   */
  countMascotas ()
  {
    return this.mascotas.length;
  }


  /**
   * ADD BOOK FN()
   * It adds a new book to the array of books.
   * @param nombreLibro - The name of the book.
   * @param nombreAutor - The name of the author of the book.
   */
  addBook ( nombre, autor )
  {
    this.libros.push(
      {
        "nombre": nombre, "autor": autor
      } );
  }


  /**
   * It returns an array of book names
   * @returns An array of strings with the names of the books.
   */
  getBookNames ()
  {
    return this.libros.map( b => b.nombre );
  }


}

const usuario = new Usuario( 'Jorge', 'Repossi' );

/**
* Add mascotas
*/
usuario.addMascota( 'Perro' )
usuario.addMascota( 'Gato' )
usuario.addMascota( 'Conejo' )
usuario.addMascota( 'Caballo' )
/**
* Add Books
*/
usuario.addBook( 'El señor de los anillos', 'J.R.R. Tolkien' )
usuario.addBook( 'JavaScript: The Good Parts', 'Douglas Crockford' )


const fullName = usuario.getFullName()
const booksNames = usuario.getBookNames()

console.log( fullName )
console.log( 'Total de mascotas: ', usuario.countMascotas() )
console.log( 'Los libros más leídos son: ', booksNames )