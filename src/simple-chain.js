const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  chain: [],
 getLength() {
 },
 addLink(value) {
   this.chain.push(value)
   return chainMaker
 },
 removeLink(position) {
   if(position > this.chain.length || position <= 0 || typeof position != "number"){
     this.chain = [];
     throw new Error("You can't remove incorrect link!")
   }
   this.chain.splice(position-1, 1)
   return chainMaker
 },
 reverseChain() {
   this.chain = this.chain.reverse()
   return chainMaker
 },
 finishChain() {
  let result = this.chain.map((item) => {
     return `( ${item} )`
   }).join("~~")
   this.chain = []
   return result
 }
};

module.exports = {
  chainMaker
};
