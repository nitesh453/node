const register =function(username) {
    console.log(`hello ${username}`);
}
const login = function(user,pass){
    console.log(`user ${user} is logged`);
    console.log(`thier password is ${pass}`);
}

module.exports = {
    register,
    login
    //register: register,
    //login:login
    //agar name same hai export import name same hai to ak bar likh skte hai
} 