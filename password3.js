String.prototype.t = function () {
     return this.split("")
          .map(t => (t > "Z" || t < "A") && (t > "z" || t < "a") ? t : String.fromCharCode(t.charCodeAt() + 1 - 26 * (t > "Z" && t <= "Z") - 26 * (t > "z" && t <= "z")))
          .join("")
};
let jwe = {
     kk: t => t.t()
     , yt: `${atob("cWJ0dHhwc2V3MjgyMTMxMjg5MDM3MTI5MDNvODIxMzkxODIzMTM=")}`
}
     , p = prompt("Password");
p.t() != jwe.yt ? alert("wrong password") : alert("correct password");

// password
// passwordv28213128903712903n82139182313