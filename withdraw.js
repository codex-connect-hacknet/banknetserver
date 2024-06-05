function validateInput() {
    var username = document.getElementById('username').value;
    var regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(username)) {
        alert('Invalid username. Only alphanumeric characters are allowed.');
         return true;
    }
     return false;
}
