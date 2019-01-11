const SHA256 = require ('crypto-js/sha256');
//import { SHA256 } from 'crypto-js/sha256' ;

class block{
    constructor(index, timestamp ,data, previousHash=''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    }

    //take the props for the the block and calculate the shah-256
    calculateHash(){
    return SHA256(this.index, this.previousHash, this.timestamp,JSON.stringify(this.data).toString())
    }
}
