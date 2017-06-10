module.exports = function(sequelize, DataTypes) {
	var Reviews = sequelize.define("Reviews", {
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "Anonymous",
			validate: {
				notEmpty: true
			}
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: true,
				min: 1,
				max: 5
			}
		},
		review: {
			type: DataTypes.TEXT,
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
				Reviews.belongsTo(models.Foodtrucks, {
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});
	return Reviews;
}