import bcrypt from "bcryptjs";
 
const users = [

    {
        name:"Admin User",
        email:"admin@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:true
    },
    {
        name:"Jagan",
        email:"jagan@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:false
    },
    {
        name:"javid",
        email:"javid@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:false
    }

];

export default users;