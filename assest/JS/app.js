var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&()?/><._!';
function generatePassword(){
    var randomPassword = '';
    var length = document.getElementById('passwordLength').innerHTML;
    // console.log(length)
    if(length <=0){
        alert('Please! Enter at least slect some range of password')
    }
    else{
        for(var i = 0; i < length; i++){
            randomPassword += string[Math.floor(Math.random() * string.length)];
            // console.log(randomPassword)
        }
        document.getElementById('password').value = (`${randomPassword}`);
        console.log(randomPassword)
    }
    
};

function copy(){
    let copy = document.getElementById('password');
    copy.select();
    navigator.clipboard.writeText(copy.value);
}

function updateLength(){
    document.getElementById('password').value = '';
    let slider = document.getElementById('slider');
    let updateLength = document.getElementById('passwordLength');
    console.log(updateLength.textContent)
    updateLength.textContent = slider.value
}