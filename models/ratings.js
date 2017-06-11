module.exports = function(sequelize, DataTypes) {
	var Ratings = sequelize.define("Ratings", {
		current_rating: {
			type: DataTypes.DECIMAL(1, 1),
			allowNull: false
		}
		// }, {
		// 	classMethods: {
		// 		associate: function(models) {
		// 			Ratings.belongsTo(models.Foodtrucks, {
		// 				foreignKey: {
		// 					allowNull: false
		// 				}
		// 			});
		// 		}
		// 	}
		// }
	});
	return Ratings;
}