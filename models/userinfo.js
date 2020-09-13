
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
 
  return UserInfo;
};
