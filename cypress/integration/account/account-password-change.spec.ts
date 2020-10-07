import Account, {data} from '../account/account';
const password =  data[0].password;
const testData = [
    {test:`Change password successfully.`, oldPassword: password, newPassword: '*TestAaXa77QBnmmnTopLoZ77ICTBT$gk&', statusCode: 200, message: 'Your password was changed successfully.'},
    {test:'Old Password does not exit.', oldPassword: 'TESTNotExitPass$89u054!', newPassword: '4Te6st$AaBC90909TB#Tgk0!', statusCode: 400, message: 'Your current password does not exist in our system.'},
    {test:'< 18 characters.', oldPassword: password, newPassword: '#4Te6st$AaB', statusCode: 400, message: 'New password does not match the condition - At least 18 alphanumeric characters and list of special chars !@#$&*'},
    {test:'Contains other special chars !@#$&*', oldPassword: password, newPassword: '4Te6st$A%aBC9090-9TB#Tgk0!', statusCode: 400, message: 'New password does not match the condition - At least 18 alphanumeric characters and list of special chars !@#$&*'},
    {test:`Not contain at least 1 special chars !@#$&*`, oldPassword: password, newPassword: '8Te6stAaBC90909TBTgk0', statusCode: 400, message: 'New password does not match the condition - At least 1 Upper case, 1 lower case ,least 1 numeric, 1 special character'},
    {test:`Not contain at least 1 lower case`, oldPassword: password, newPassword: 'AT$THJKBIOPWS#!bMaQLP', statusCode: 400, message: 'New password does not match the condition - At least 1 Upper case, 1 lower case ,least 1 numeric, 1 special character'},
    {test:`Not contain at least 1 upper case`, oldPassword: password, newPassword: 'dhyu780$&feg@iolo777oaqu', statusCode: 400, message: 'New password does not match the condition - At least 1 Upper case, 1 lower case ,least 1 numeric, 1 special character'},
    {test:`Not contain at least 1 number`, oldPassword: password, newPassword: '*TestAaXaQBnmZICTBT$gk&', statusCode: 400, message: 'New password does not match the condition - At least 1 Upper case, 1 lower case ,least 1 numeric, 1 special character'},
    {test:`Duplicate repeat characters more than 4.`, oldPassword: password, newPassword: '*Tes5tAaaX8aQaaaBn88mZICT88BT$gk&', statusCode: 400, message: 'New password has duplicate repeat characters more than 4.'},
    {test:`>50 % is a number`, oldPassword: password, newPassword: '78*Tes5tAa789034567889T$gk&', statusCode: 400, message: '50 % of the password should not be a number'},
    {test:`80% similar`, oldPassword: password, newPassword: 'Test$AaBC909TB#Tgk0Re!', statusCode: 400, message: 'New password is similar to old password'},
    {test:`> 4 special characters.`, oldPassword: password, newPassword: 'Test$AaBC&##909TB#Tgk0Re!', statusCode: 400, message: 'New password has more than 4 special characters.'},

];
testData.forEach(function(td) {
describe('Account - Change Password', () => {
    it(`script: account-password-change - ${td.test}`, () => {
        const result = Account.changePassword(td.oldPassword, td.newPassword);
        expect(result.message).to.eq(td.message);
        expect(result.statusCode).to.eq(td.statusCode);
    });
});
});
