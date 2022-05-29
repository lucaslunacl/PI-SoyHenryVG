const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('games', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        background_image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        descriptions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_inDB:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        leyenda : {
            type: DataTypes.STRING,
            allowNull:false,
            defaultValue: 'Creado en la DB',
        }

    });
};
