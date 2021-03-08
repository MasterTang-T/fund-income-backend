const USER = {
    selectUsers: "SELECT  * FROM users",
    selectUserId: "SELECT * FROM users WHERE userId =",
    selectName: "SELECT * FROM users WHERE user_name =",
    addUser: "INSERT INTO users(user_name, user_password) VALUES(?,?)",
}

module.exports = USER;