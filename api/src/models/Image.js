const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "image",
    {
      url: {
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
