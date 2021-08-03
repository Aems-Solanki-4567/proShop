const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("aems@aems4567", 10),
    isAdmin: true,
  },
  {
    name: "Aems",
    email: "aems@gmail.com",
    password: bcrypt.hashSync("aems@aems4567", 10),
  },
];

module.exports = users;
