module.exports = function(sequelize, dataTypes){
    let alias = "Artista";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "artistas",
        timestamps: false
    }

    let Artista = sequelize.define(alias, cols, config);

    Artista.associate = function(models) {
        // Artista.belognsToMany(models.Cancion , {
        //     as: "canciones",
        //     through: "artista_cancion",
        //     foreignKey: "artista_id",
        //     otherKey: "canciones_id",
        //     timestamps: false
        // });

        Artista.hasMany(models.Cancion , {
            as: "canciones",
            foreignKey: "artista_id"
        });
    }

    return Artista;

}