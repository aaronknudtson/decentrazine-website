
const keccak256 = require('keccak256')
const { MerkleTree } = require('merkletreejs')
const snapshot = require('./snapshot.json')

let leaves = new Array(snapshot.length).fill('');
let i = 0
for (var address in snapshot.addresses) {
    leaves[i] = keccak256(address.toLowerCase())
    console.log(address)
    i++
}
const tree = new MerkleTree(leaves, keccak256, { sort: true })
const root = tree.getHexRoot()
console.log(root)

