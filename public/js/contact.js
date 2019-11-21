$(document).ready(function(){
    $( ".contact-button" ).click(function() {
        const name = $("#usersname").val()
        alert("Hi, " + name + ", we will get in touch with you soon!");
    })
})