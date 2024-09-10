document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var Username = document.getElementById('Username').value;
    var Password = document.getElementById('Password').value;

    
    console.log('Username:', Username);
    console.log('Password:', Password);

});
