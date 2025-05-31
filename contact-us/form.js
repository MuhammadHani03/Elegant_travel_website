function validateform() {
  var fname = document.myform.fname.value;
  var lname = document.myform.lname.value;
  var eml = document.myform.email.value;
  var message = document.getElementById("msg").value;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (fname == "" && lname == "" && eml == "" && message == "") {
    alert("blank response can't be submitted ");
  } else if (
    fname != "" &&
    lname != "" &&
    document.myform.email.value.match(validRegex) &&
    message != ""
  ) {
    alert("response submitted");
    return true;
  } else if (fname == "") {
    alert("first name required");
  } else if (lname == "") {
    alert("last name required");
  } else if (eml == "") {
    alert("email invalid or blank");
  } else if (message == "") {
    alert("write some message");
  }
}
