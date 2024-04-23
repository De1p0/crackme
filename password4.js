(() => {
     let _ = _ => _.split("")
          .map(_ => `&#${_.charCodeAt(0)};`)
          .join("")
          , $ = () => {
               let r = prompt("Enter password:")
                    , o = _(r);
               "&#104;&#101;&#108;&#108;&#111;&#32;&#105;&#32;&#97;&#109;&#32;&#100;&#101;&#108;&#112;&#104;&#105;" === o ? alert("Password correct!") : (alert("wrong password"), $())
          };
     $()
})();


// password
// hello i am delphi