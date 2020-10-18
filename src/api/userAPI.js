const { fetchUsersRequest } = require("../redux");

export const fetchUsers = async () => {
   await setTimeout(console.log("hola"), 2000)
   return {
      name: "Agustin",
      apellido: "Gomez",
      role: "student"
   }
} 