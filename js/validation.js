function validate() {
    var str = 
    [
        document.forms["myForm"]["user_name"].value,
        document.forms["myForm"]["user_email"].value,
        document.forms["myForm"]["user_message"].value
    ];

    var vNameArray = ["Name", "E-mail", "Message"];

    var result = "";

    for (var i = 0; i < str.length; i++) {
        if (str[0] === "") {
            result += vNameArray[i] + " must be filled out!\n";
        }
    }

    if (result !== "") {
        alert(result);
    }
}