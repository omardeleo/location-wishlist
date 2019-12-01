const location = (sequelize, DataTypes) => {
    const Location = sequelize.define('location', {
      address: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      isAccepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });

    Location.associate = models => {
        models.Location.hasMany(models.Suggestion, { onDelete: 'CASCADE'});
    }
    return Location;
  };

module.exports = location;