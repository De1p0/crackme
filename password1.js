let o = {
     s: 0
     , p: 2
     , x: s => atob(s)
     , g: "aGVsbG8hIHRoaXMgaXMgYSBwYXNzd29yZA=="
};
o.s = o.x(o.g);
let a = prompt("Password");
a == o.s ? alert("Correct password") : alert("Incorrect password");

// password
// hello! this is a password