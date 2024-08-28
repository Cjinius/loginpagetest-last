document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === "loginpage@gmail.com" && password === "12345678") {
        alert('Login successful! Redirecting......');
        window.location.href = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DdQw4w9WgXcQ&ved=2ahUKEwizjq7Z4JaIAxUnsFYBHUaQLZUQwqsBegQIExAG&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
   } else {
        document.getElementById('errormessage').style.display = 'block';
    }
});