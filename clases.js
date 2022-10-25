class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros= libros; //array de objetos
        this.mascotas = mascotas; //array de string
    }

    getFullName(){   
        return `El nombre completo es ${this.nombre} ${this.apellido}`;
    }

    //Agregando el atributo mascota al array mascotas
    addMascota(mascota){        
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
      
        this.libros.push({
            nombre,
            autor
        })
    }

    getBookNames(){
        return this.libros.map(function(libro){
            return libro.nombre;
        });
    } 
    
}

const usuario = new Usuario('pedro','lasso',[{nombre:'100 años de soledad',autor:'Gabriel Garcia Marquez'}], ['Firulai']);
console.log(usuario);
console.log(usuario.getFullName());

usuario.addMascota('perro');
//console.log(usuario);
console.log(usuario.countMascotas());
usuario.addBook('Fuego y Sangre','George Martin');
console.log(usuario.getBookNames());

