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
		created_at: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: DataTypes.NOW
		}
	}, {
		timestamps: false,
		classMethods: {
			associate: function(models) {
				Foodtrucks.hasMany(models.Reviews, models.Ratings, {
					onDelete: "cascade"
				});
			}
		}
	});
	return Foodtrucks;
}