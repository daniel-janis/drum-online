import './Login';

var user = {};

const UserService = {
    get: () => {
        return user;
    },
    set: (userData) => {
        user = JSON.parse(JSON.stringify(userData));
    }
};



export default UserService;


/*

User service allows you to get and set the user
You can also provide a function for updating the user (call the api to update the database)


*/

