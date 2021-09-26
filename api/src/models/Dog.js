const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      temperament: {
        type: DataTypes.STRING,
      },
      reference_image_id: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
