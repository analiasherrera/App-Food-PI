const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Typediet = sequelize.define('typediet', {
    
    name: {
      type: DataTypes.STRING,
      
    },
    
  },{
    sequelize,
    modelName: "typediet",
    timestamps: false

  });
};
