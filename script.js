document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Display input values in an alert box
    alert(`Username: ${username}\nPassword: ${password}`);

    // Optionally, log the input values to the console
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
});
