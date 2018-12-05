const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

export default {
    async isEmailUnique(UserModel, email) {
        return await UserModel.count({where: {'email': email}}) === 0;
    },
    isPassword(password) {
        return passwordRegex.test(password)
    },
    isEmail(email) {
        return emailRegex.test(email.toLowerCase())
    }
}