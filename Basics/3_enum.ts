enum Membership {
    Simple,
    Standard,
    Premium = 'Premium'
}

const membership = Membership
console.log(Membership)
//output
// {
//     '0': 'Simple',
//     '1': 'Standard',
//     Simple: 0,
//     Standard: 1,
//     Premium: 'Premium'
// }

console.log(Membership['0'])
console.log(Membership.Simple)
