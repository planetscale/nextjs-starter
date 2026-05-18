const bcrypt = require('bcryptjs');

const getHashedPassword = async (plain_password) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(plain_password, salt)

  console.log(hashedPassword)


  return hashedPassword
}

module.exports = { getHashedPassword }
