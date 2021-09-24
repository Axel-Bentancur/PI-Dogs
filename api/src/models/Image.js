const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "image",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
