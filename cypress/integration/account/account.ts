import stringSimilarity from 'string-similarity';
export const data = [
    { "password": "Test$AaBC90909TB#Tgk0!"},
];

class Account {

    changePassword(oldPassword: string, newPassword: string): { statusCode: number, message: string} {
        if(!this.isPasswordExist(oldPassword)) return {statusCode: 400, message: 'Your current password does not exist in our system.'};
        if(!Boolean(newPassword.match(/^([a-zA-Z0-9!@#\$&\* ]{18,})$/g)))
            return {statusCode: 400, message:
                    'New password does not match the condition - At least 18 alphanumeric characters and list of special chars !@#$&*'};
        if(!Boolean(newPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$&\*])(.{18,})/g)))
            return {statusCode: 400, message:
                    'New password does not match the condition - At least 1 Upper case, 1 lower case ,least 1 numeric, 1 special character'};
        if(Boolean(newPassword.match(/(.).*\1{4}/g)))
            return {statusCode: 400, message: 'New password has duplicate repeat characters more than 4.'};
        const matched4specialChars = newPassword.match(/[^\w\s]/g);
        if(matched4specialChars != null)
            if(matched4specialChars.length>4)
                return {statusCode: 400, message: 'New password has more than 4 special characters.'};
        const matchedDigits = newPassword.match(/[0-9]/g);
        if(matchedDigits !== null)
            if(matchedDigits.length > Math.floor(newPassword.length/2))
                return {statusCode: 400, message: '50 % of the password should not be a number'};
        if(stringSimilarity.compareTwoStrings(oldPassword, newPassword)>0.8)
            return {statusCode: 400, message: 'New password is similar to old password'};
        return {statusCode: 200, message: 'Your password was changed successfully.'};
    }
    isPasswordExist(oldPassword: string): boolean {
        return data.filter(p=>p.password === oldPassword).length>0? true: false;
    }
}
export default new Account();
