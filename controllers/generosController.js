let db = require("../database/models");

const { Op } = require("sequelize");

//Array de categorias asignadas en base de datos para devolver nombres y no ids
let categoriasDb = [
    "Rock",
    "Pop",
    "Kpop",
    "Salsa",
];

let generosController = {
    generos: function(req,res){
        // Para usar Postman:
        let pCanciones = db.Cancion.findAll()

        // let rock= db.Cancion.findAll( {
        //     where: {
        //         genero_id : 1 
        //     }
        // });

        // let pop= db.Cancion.findAll({
        //     where: {
        //         genero_id : 2
        //     }
        // });

        // let kPop= db.Cancion.findAll({
        //     where: {
        //         genero_id : 3
        //     }
        // });

        // let salsa= db.Cancion.findAll({
        //     where: {
        //         genero_id : 4
        //     }
        // });

    //     let listaCanciones = []
    //     for(let i = 0; i < pGeneros.length; i++) {
    //     if(pGeneros.id == pCanciones.genero_id){
    //     listaCanciones.push[pCanciones.titulo]
    // }
                
    // } 

        // Promise.all([pGeneros, rock, pop, kPop, salsa],)

        .then(function(canciones){
            
            let listaCanciones = canciones.map((array) =>{
                return [
                    {
                        // idgenero: array.genero_id,
                        genero: categoriasDb[array.genero_id - 1],
                        cancion: array.titulo
                    }
                ]
            })

            return res.status(200).json(
                {message:"listado de generos con sus canciones", 
                total: canciones.length, 
                canciones: listaCanciones, 
                status: 200});
            
        })


        // Para la vista ejs:
        // let pAlbumes = db.Album.findAll();
        // let pArtistas = db.Artista.findAll();
        // let pGeneros = db.Genero.findAll();
        // let pCanciones= db.Cancion.findAll();

        // Promise.all([pCanciones, pArtistas, pAlbumes, pGeneros,],)
        // .then(function([canciones, artistas, albumes, generos]){
        //     return res.render("listadoGeneros", {canciones:canciones, artistas:artistas, albumes:albumes, generos:generos});
        // })
    }
}

module.exports = generosController