const SHA256 = require ('crypto-js/sha256');

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

class blockChain {
    constructor(){
        this.chain = [blockChain.createGenesisBlock()]
    }

    static createGenesisBlock(){
        return new block(0,Math.round(new Date().getTime()/1000),'Mother of Nature','')
    }

    getLatestBlock(){
        let length = this.chain.length;
        return this.chain[length-1];
    }

    //newBlock object
    //when adding a block the hash and the previous hash is dynamically set while the other data manually
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock) //I'm still jenny from the block ?
    }
}

let RahmoCoin = new blockChain();
RahmoCoin.addBlock(new block(1,Math.round(new Date().getTime()/1000),10000000));
RahmoCoin.addBlock(new block(2,Math.round(new Date().getTime()/1000),20));

console.log(JSON.stringify(RahmoCoin,null,4).toString());
