// const hashCode = str =>
//     (
//       [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
//     ).toString(36);
  
  class Block {
      constructor(index, data, prev) {
          this.index = index;
          this.data = data;
          this.prev = prev;
          this.hash = this.computeHash();
      }
  
      computeHash() {
          const str = `${this.index}${this.prev.hash}${JSON.stringify(this.data)}`;
          return hashCode(str);
      }
  
      chain(data) {
          return blockChain(data, this);
      }
  }
  
  function blockChain(data, prev = { index: 0, hash: '0' }) {
      const newIndex = prev.index + 1;
      return new Block(newIndex, data, prev);
  }
  
//   const first = blockChain({ a: 1 });
//   console.log(first.index);
//   console.log(first.data); 
//   console.log(first.prev); 
//   console.log(first.hash); 
//   console.log(hashCode('10{"a":1}'));
  
//   const second = first.chain({ hello: 'world' });
//   console.log(second.hash);                     
//   console.log(hashCode('21103f27{"hello":"world"}'));
  
//   const chain = second
//     .chain({ value: 4455 })
//     .chain({ some: 'data' })
//     .chain({ cool: 'stuff' });
  
//   const fork = second
//     .chain({ value: 335 })
//     .chain({ some: 'data' })
//     .chain({ cool: 'stuff' });
  
//   console.log(chain.hash);
//   console.log(fork.hash); 
//   console.log(chain.index);
//   console.log(fork.index); 
  