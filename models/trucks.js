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
			allowNull: false,
			defaultValue: "none",
		},
		website: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "www.nosite.com",
			validate: {
				isUrl: true
			}
		},
		twitter_handle: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "",
		},
		current_rating: {
			type: DataTypes.DECIMAL(10, 1),
			allowNull: false,
			defaultValue: 0
		},
		total_ratings: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		menu_download: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "no menu"
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