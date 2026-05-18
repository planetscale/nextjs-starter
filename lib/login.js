const bcrypt = require('bcryptjs');

// User login
const login = async ({email, password}) => {
  // Retrieve the user object from the database based on the provided email
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  if (!user) {
    return { status: 401, message: "Invalid credentials" }
  }

  const storedHashedPassword = user.password;

  // Compare the provided password with the stored hashed password
  const isPasswordValid = await bcrypt.compare(password, storedHashedPassword);

  if (isPasswordValid) {
    return { status: 200, message: 'Login successful' }
  } else {
    return { status: 401, message: "Invalid credentials" }
  }
};

module.exports = { login }
