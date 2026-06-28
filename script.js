document.addEventListener("DOMContentLoaded", function () {

    // PROTECT INDEX PAGE
    let currentPage = window.location.pathname;

    if (currentPage.includes("index.html")) {

        let userName = localStorage.getItem("loggedInUser");

        if (!userName) {

            alert("Please Login First");

            window.location.href = "login.html";

        }

    }

    // REGISTER
    let registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let fullName =
            document.getElementById("fullName").value;

        let phone =
            document.getElementById("phone").value;

        let password =
            document.getElementById("password").value;

        let pincode =
            document.getElementById("pincode").value;

        let address =
            document.getElementById("address").value;

        let user = {
            name: fullName,
            phone: phone,
            password: password,
            pincode: pincode,
            address: address
        };

        localStorage.setItem(
            phone,
            JSON.stringify(user)
        );

        alert(
            "Welcome " +
            fullName +
            "! Registration Successful."
        );

        window.location.href = "login.html";

    });

}

    // LOGIN
    let loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let phone =
    document.getElementById("loginPhone").value;

let password =
    document.getElementById("loginPassword").value;

let savedUser =
    localStorage.getItem(phone);

            if (savedUser) {

                let user = JSON.parse(savedUser);

                if (user.password === password) {

                    localStorage.setItem("loggedInUser", user.name);
                    localStorage.setItem("loggedInPhone", phone);

                    alert("Login Successful! Welcome " + user.name);

                    window.location.href = "index.html";

                } else {

                    alert("Wrong Password");

                }

            } else {

                alert("User Not Found");

            }

        });

    }

    // WELCOME MESSAGE
    let welcomeUser = document.getElementById("welcomeUser");

    if (welcomeUser) {

        let userName = localStorage.getItem("loggedInUser");

        if (userName) {

            welcomeUser.innerHTML = "Welcome, " + userName + " 👋";

        }

    }

});

// LOGOUT
function logoutUser() {

    localStorage.removeItem("loggedInUser");

    alert("Logged Out Successfully");

    window.location.href = "login.html";

}
function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(position) {

                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                let mapsLink =
    "https://www.google.com/maps?q=" +
    latitude + "," + longitude;

document.getElementById("address").value =
    latitude + ", " + longitude;

localStorage.setItem(
    "currentLocation",
    mapsLink
);

            },

            function() {

                alert("Location access denied.");

            }

        );

    } else {

        alert("Geolocation is not supported.");

    }

}
