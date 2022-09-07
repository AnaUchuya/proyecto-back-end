module.exports = function(sequelize, dataTypes){
    let alias = "Album";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "albumes",
        timestamps: false
    }

    let Album = sequelize.define(alias, cols, config);

    Album.associate = function(models) {
        // Album.belognsToMany(models.Cancion , {
        //     as: "canciones",
        //     through: "album_cancion",
        //     foreignKey: "album_id",
        //     otherKey: "canciones_id",
        //     timestamps: false
        // });

        Album.hasMany(models.Cancion , {
            as: "canciones",
            foreignKey: "album_id"
        });
    }

    return Album;

}