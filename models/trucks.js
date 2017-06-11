module.exports = function(sequelize, DataTypes) {
	var Foodtrucks = sequelize.define("Foodtrucks", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		food_type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		popular_item: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
			validate: {
				notEmpty: true
			}
		},
		website: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
			validate: {
				isUrl: true
			}
		},
		twitter_handle: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
			validate: {
				notEmpty: true
			}
		},
		current_rating: {
			type: DataTypes.DECIMAL(10, 1),
			allowNull: false
		}
	}, {
		classMethods: {
			associate: function(models) {
				Foodtrucks.hasMany(models.Reviews, {
					onDelete: "cascade"
				});
			}
		}
	});
	return Foodtrucks;
}