

        function login() {
            let username = document.getElementById("username").value;

            if (username === "") {
                alert("No username entered");
            } else {
                alert("Welcome " + username + "!");
            }
        }
  