function mainfunc() {
var user=document.getElementById("user").value;
var userName=String(user);
if (checkUsername(userName)) {
userName=htmlEncode(userName);
console.log(userName);
hash();
encrypt();
}
}
function hash() {
var sum = 0, count = 0;
if (document.getElementById("im1").checked) {
count++;
sum = sum + 10;
}
if (document.getElementById("im2").checked) {
count++;
sum = sum + 20;
}
if (document.getElementById("im3").checked) {
count++;
sum = sum + 30;
}
if (document.getElementById("im4").checked) {
count++;
sum = sum + 40;
}
if (document.getElementById("im5").checked) {
count++;
sum = sum + 50;
}
if (document.getElementById("im6").checked) {
count++;
sum = sum + 60;
}
if (document.getElementById("im7").checked) {
count++;
sum = sum + 70;
}
if (document.getElementById("im8").checked) {
count++;
sum = sum + 80;
}
if (document.getElementById("im9").checked) {
count++;
sum = sum + 90;
}
console.log(sum);
}
function encrypt() {
var iuser = document.getElementById("user").value;
temp_u = iuser.split('');
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
"y", "z"];
for (let i = 0; i < iuser.length; i++) {
temp_u[i] = alpha[alpha.length - alpha.indexOf(iuser[i])];
}
iuser = temp_u.join('');
document.getElementById("user").value = iuser;
}
function htmlEncode(str) {
return String(str).replace(/[^\w. ]/gi, function (c) {
return '&#' + c.charCodeAt(0) + ';';
});
}
{/* <script>document.body.innerHTML =
htmlEncode(untrustedValue)</script> */ }
function jsEscape(str) {
return String(str).replace(/[^\w. ]/gi, function (c) {
return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-
4);
});
}
{/*
<script>document.write('<script>x="'+jsEscape(untrustedValue)+'";<\/scr
ipt>')</script> */ }
function isUserNameValid(username) {
/*
Usernames can only have:
- Lowercase Letters (a-z)
- Numbers (0-9)
- Dots (.)
- Underscores (_)
*/
const res = /^[a-z0-9_\.]+$/.exec(username);
const valid = !!res;
return valid;
}
function checkUsername(username) {
if (username.length < 3) {
alert('Username must be at least 3 characters long');
return 0;
}
if (username.length > 20) {
alert('Username must be less than 20 characters long');
return 0;
}
if (!isUserNameValid(username)) {
alert('Username can only have: \n- Lowercase Letters (a-z) \n-
Numbers (0-9) \n- Dots (.) \n- Underscores (_)');
return 0;
}
return 1;
}
