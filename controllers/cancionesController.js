let db = require("../database/models");

let cancionesController = {

    // Para crear usando la vista ejs:
    // crear : function (req,res) {

    //     let palbumes = db.Album.findAll();
    //     let partistas = db.Artista.findAll();
    //     let pgeneros = db.Genero.findAll();

    // Promise.all([palbumes, partistas, pgeneros])
    //     .then(function([albumes, artistas, generos]){
    //         return res.render("creacionCanciones", {albumes, artistas, generos});
    // })
    //     .catch(function(e) {
    //     console.log(e);
    // });
            
    // },

    guardar : function(req,res){
        db.Cancion.create(
            // Para usar Postman:
            req.body

            // Para la vista ejs:
            // {
            // titulo: req.body.titulo,
            // duracion: req.body.duracion,
            // genero_id: req.body.genero,
            // album_id: req.body.album,
            // artista_id: req.body.artista
            // }
        )
        .then(function(cancion){
            //Para ver la vista en ejs:
            //res.redirect("/canciones") 

            // Para usar Postman:
            return res.status(200).json({message:"cancion creada", data: cancion, status: 200});
        });
    },
    listado: function(req,res){
        db.Cancion.findAll()
        .then(function(canciones){
            // Para ver la vista en ejs:
            // res.render("listadoCanciones", {canciones:canciones});
            
            // Para usar Postman:
            return res.status(200).json({message:"listado de canciones", data: canciones, status: 200});
        })
    },
    detalle: function(req,res){
        db.Cancion.findByPk(req.params.id,{
            include: [{association: "album"}, {association: "genero"},{association: "artista"}] 
        })
        .then(function(cancion){
            // Para ver la vista en ejs:
            // res.render("detalleCancion", {cancion:cancion})

            // Para usar Postman:
            return res.status(200).json({message:"detalle de una canción", data: cancion, status: 200});
        })
    },

    // Para editar usando la vista ejs:
    // editar: function(req,res){
    //     let pAlbumes = db.Album.findAll();
    //     let pArtistas = db.Artista.findAll();
    //     let pGeneros = db.Genero.findAll();
    //     let pCancion= db.Cancion.findByPk(req.params.id);

    //     Promise.all([pCancion, pArtistas, pAlbumes, pGeneros,])
    //     .then(function([cancion, artistas, albumes, generos]){
    //         return res.render("editarCancion", {cancion:cancion, artistas:artistas, albumes:albumes, generos:generos});
    //     })
    // },

    actualizar: function(req,res){
        db.Cancion.update(
        // Para usar Postman:
            req.body

        // Para la vista ejs:
        //     {
        //     titulo: req.body.titulo,
        //     duracion: req.body.duracion,
        //     genero_id: req.body.genero,
        //     album_id: req.body.album,
        //     artista_id: req.body.artista
        // }

        ,{
           where: {
            id: req.params.id
           } 
        })

        .then(function(cancion){

        //Para ver la vista en ejs:  
        // res.redirect("/canciones/" + req.params.id)

        // Para usar Postman:
        return res.status(200).json({message:"se actualizó", data: cancion, status: 200});
    })        

    },
    borrar: function(req,res){
        db.Cancion.destroy({
            where: {
                id: req.params.id
            }
        })
        // Para borrar usando el ejs:
        // res.redirect("/canciones");

        .then(response =>{
            return res.json(response)
        })
    }

}

module.exports = cancionesController