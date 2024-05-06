document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !message) {
        document.getElementById("status").innerHTML = "Please fill in all fields.";
        return;
    }

    // Send form data via AJAX
    var xhr = new XMLHttpRequest();
    var url = "send_email.php"; // Change this to your server-side script URL
    var params = "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("status").innerHTML = xhr.responseText;
            document.getElementById("contact-form").reset(); // Reset form after successful submission
        }
    };
    xhr.send(params);
});
