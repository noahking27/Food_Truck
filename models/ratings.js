module.exports = function(sequelize, DataTypes) {
	var Ratings = sequelize.define("Ratings", {
		current_rating: {
			type: DataTypes.DECIMAL(10, 1),
			allowNull: false
		},
		truck_name: {
			type:DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	}, {
		classMethods: {
			associate: function(models) {
				Ratings.belongsTo(models.Foodtrucks, {
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});
	return Ratings;
}