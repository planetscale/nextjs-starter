const bcrypt = require('bcryptjs');
// User registration
const register = async ({ name, email, password, password_confirmation }) => {
  if (password != password_confirmation) {
    return {status: 400, message: "Error, password and password_confirmation doesn't match."}
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const tempObj = { name, email, password: hashedPassword };

  try {
  // Store the user object in the database
    await prisma.user.create(tempObj)
  } catch(error) {
    return {status: 400, message: `Error: ${error.message}`}
  }

  return {status: 201, message: "Registration successful"}
};

module.exports = { register }
