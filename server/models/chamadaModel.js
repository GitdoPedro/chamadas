const createCallModel = (sequelize, DataTypes) => {
    return sequelize.define('Call', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      qtdCalls: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      month:{
        type: DataTypes.STRING,
        allowNull: false
      }
    });
};

module.exports = createCallModel;