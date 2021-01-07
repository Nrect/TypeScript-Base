var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership["Premium"] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership;
console.log(Membership);
console.log(Membership['0']);
console.log(Membership.Simple);
