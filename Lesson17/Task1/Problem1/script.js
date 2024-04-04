class Human {
    firstname;
    lastname;
    age = 0;
    gender;
    nationality;

    constructor(firstname, lastname, age, gender, nationality) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    getFullName() {
        return this.firstname.concat(this.lastname);
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
}

class User extends Human {
    username;
    email;
    isAdmin = false;
    isLogged = false;
    password;
    bio;

    constructor(firstname, lastname, age, gender, nationality, username, email, isAdmin, password, bio) {
        super(firstname, lastname, age, gender, nationality);
        if (password.length > 5) {
            this.password = password;
        } else {
            throw new Error('Password length is less than 6.');
        }
        if (bio.length < 100) {
            this.bio = bio;
        } else {
            throw new Error('Bio length is more than 100.');
        }
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    changePassword(currentPassword, newPassword) {
        if (currentPassword !== newPassword) {
            return this.password = newPassword;
        } else {
            return 'New password and current password are the same!';
        }
    }

    changeEmail(usersArray, newEmail) {
        let flag = usersArray.every((element) => element !== newEmail);
        if (flag) {
            return this.email = newEmail;
        } else {
            return 'New email and current email are the same!';
        }
    }
}

function sortUsersByUsername(array) {
    return array.sort((user1, user2) => user1.username > user2.username);
}

function filterByBirthYear(usersArray, year) {
    return usersArray.filter((element) => element.getBirthYear() > year);
}

function login(usersArray, username, password) {
    let findUsername = usersArray.some((element) => element.username === username);
    if (!findUsername) {
        return 'User Not Found';
    } else {
        let loginUser = usersArray.find(element => element.username === username && element.password === password);
        if (!loginUser) {
            return 'Incorrect username or password';
        } else {
            if (!loginUser.isLogged) {
                loginUser.isLogged = true;
                return 'Successfully logged in';
            } else {
                return 'Another user is currently logged in';
            }
        }
    }
}

function logOut(usersArray, username) {
    let userArr = usersArray.filter((element) => element.username === username);
    if (userArr.length === 0) {
        return 'User not found!';
    } else {
        if (userArr[0].isLogged) {
            userArr[0].isLogged = false;
            return 'Successfully logged out';
        } else {
            return 'User is not logged in';
        }
    }
}

function createUser(array, user) {
    array.push(user);
    return array;
}

function deleteUser(array, username) {
    let index = array.findIndex((element) => element.username === username);
    if (index === -1) {
        return 'Cannot delete user!';
    } else {
        array.splice(index, 1);
        return array;
    }
}

let users = [
    new User(
        "John",
        "Doe",
        30,
        "Male",
        "American",
        "johndoe",
        "john.doe@example.com",
        false,
        "password123",
        "A bit about John."
    ),
    new User(
        "Jane",
        "Doe",
        28,
        "Female",
        "British",
        "janedoe",
        "jane.doe@example.com",
        true,
        "securepassword",
        "Jane's bio goes here."
    ),
    new User(
        "Alex",
        "Smith",
        35,
        "Non-binary",
        "Canadian",
        "alexsmith",
        "alex.smith@example.com",
        false,
        "alexspassword",
        "All about Alex."
    ),
    new User(
        "Emily",
        "Clark",
        26,
        "Female",
        "Australian",
        "emilyclark",
        "emily.clark@example.com",
        false,
        "emilyspassword",
        "Explorer and photographer."
    ),
    new User(
        "Michael",
        "Brown",
        32,
        "Male",
        "German",
        "michaelbrown",
        "michael.brown@example.com",
        true,
        "michaelspass",
        "Coffee enthusiast. Avid reader."
    ),
    new User(
        "Luis",
        "Gomez",
        29,
        "Male",
        "Spanish",
        "luisgomez",
        "luis.gomez@example.com",
        false,
        "luispassword",
        "Music lover, Guitar player."
    ),
    new User(
        "Sophia",
        "Lopez",
        31,
        "Female",
        "Mexican",
        "sophialopez",
        "sophia.lopez@example.com",
        true,
        "sophiaspassword",
        "Digital marketer and content creator."
    ),
];