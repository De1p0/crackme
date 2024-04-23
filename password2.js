let g = {
     p: "this is hte passwrod"
     , p: new Uint8Array([112, 97, 115, 115, 119, 114, 111, 100, 99, 50, 118, 50, 50, 119, 111, 119, 105, 101])
          .toString()
     , s: _ => new TextEncoder()
          .encode(_)
          .toString()
};
g.y = prompt("Password"), g.s(g.y) != g.p ? alert("wrong password") : alert("password correct");

// password

// passwrodc2v22wowie