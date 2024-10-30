var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&()?/><._!';
function generatePassword(){
    var randomPassword = '';
    for(var i = 0; i < 9; i++){
        randomPassword += string[Math.floor(Math.random() * string.length)];
        // console.log(randomPassword)
    }
    document.getElementById('password').value = (`${randomPassword}`);
    console.log(randomPassword)
}