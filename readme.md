#Desafío Back End

## Ana Gabriela Uchuya Villegas

Consistió en desarrollar un CRUD de una aplicación conectada a la base de datos MUSICANDO. El desarrollo que se implementó es solo de backend tipo API REST.

Para ello se utilizó:

Express
Sequelize
Mysql2
Entre otros

En este proyecto de Express se modeló la base de datos mediante sequelize.

Se trabajaron los siguienres endpoints:

/canciones (GET) que muestre un listado de las canciones con sus propiedades

/canciones (POST) para crear un nuevo registro de una canción

/canciones/:id (GET) que muestre una canción

/canciones/:id (PUT) para editar una canción

/canciones/:id (DELETE) para eliminar una canción

/generos (GET) listado de todos los géneros con sus canciones

Aclaración: para todos los endpoints se debe devuelve un json con su código de estado y el resultado correspondiente, en caso de haberlo.

Se trabajó con Postman para corroborar que todos los endpoints funcionen correctamente.

# Musicando 

### Esta es la base de datos
_Esta base de datos está compuesta por las siguientes tablas_
- Artistas
- Canciones
- Albumes
- Generos

_Las relaciones están definidas de la siguiente forma_
- Una canción tiene un album
- Un albun tiene muchas canciones

- Una canción tiene un genero
- Un genero tiene muchas canciones

- Una canción tiene un artista
- Un artista tiene muchas canciones
