const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Recipe= sequelize.define('recipe', {
    id: {
      type: DataTypes.STRING,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dish_summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      
    },
    health_Score: {
      type: DataTypes.INTEGER,

    },    
    step_by_step: {
      type: DataTypes.TEXT
    }    
  },{
    sequelize,
    modelName: "recipe",
    timestamps: false

  });
};
