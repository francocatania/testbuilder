/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue !== true) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function () {
    detectNetwork('6011567890123456').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567890123456789').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function () {
    detectNetwork('6511567890123456').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511567890123456789').should.equal('Discover');
  });
  for (var i = 644; i < 650; i++) {
    (function(index) {
      it('has a prefix of ' + index.toString() + ' and a length of 16', function() {
      detectNetwork(index.toString() + '4567890123456').should.equal('Discover');
    });
    it('has a prefix of ' + index.toString() + ' and a length of 19', function() {
      detectNetwork(index.toString() + '4567890123456789').should.equal('Discover');
    });
    })(i);
  };
});


describe('Maestro', function() {
// Write full test coverage for the Maestro card
  var prefixes = ['5018', '5020', '5038', '6304'];
  for (var i = 0; i < prefixes.length; i++) {
    (function(pre) {
      it('has a prefix of ' + pre + ' and a length of 19', function() {
        detectNetwork(pre + '567890123456789').should.equal('Maestro');
      });
      it('has a prefix of ' + pre + ' and a length of 18', function() {
        detectNetwork(pre + '56789012345678').should.equal('Maestro');
      });
      it('has a prefix of ' + pre + ' and a length of 17', function() {
        detectNetwork(pre + '5678901234567').should.equal('Maestro');
      });
      it('has a prefix of ' + pre + ' and a length of 16', function() {
        detectNetwork(pre + '567890123456').should.equal('Maestro');
      });
      it('has a prefix of ' + pre + ' and a length of 15', function() {
        detectNetwork(pre + '56789012345').should.equal('Maestro');
      });
      it('has a prefix of ' + pre + ' and a length of 14', function() {
        detectNetwork((pre + '5678901234')).should.equal('Maestro');
      });
      it('has a prefix of ' + pre + ' and a length of 13', function() {
        detectNetwork((pre + '567890123')).should.equal('Maestro');
      });
      it('has a prefix of ' + pre + ' and a length of 12', function() {
        detectNetwork((pre + '56789012')).should.equal('Maestro');
      });
    })(prefixes[i]);
  };
});

describe('Switch', function() {
  var prefixesWithLength4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  for (var i = 0; i < prefixesWithLength4.length; i++) {
    (function(pre) {
      it('has a prefix of ' + pre + ' and a lenth of 16', function() {
        detectNetwork(pre + '567890123456').should.equal('Switch');
      });
      it('has a prefix of ' + pre + ' and a lenth of 18', function() {
        detectNetwork(pre + '56789012345678').should.equal('Switch');
      });
      it('has a prefix of ' + pre + ' and a lenth of 19', function() {
        detectNetwork(pre + '567890123456789').should.equal('Switch');
      });
    })(prefixesWithLength4[i]);
  };
  it('has a prefix of 564182 and a length of 16', function() {
    detectNetwork('5641827890123456').should.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function() {
    detectNetwork('564182789012345678').should.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 19', function() {
    detectNetwork('5641827890123456789').should.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 16', function() {
    detectNetwork('6331107890123456').should.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 18', function() {
    detectNetwork('633110789012345678').should.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 19', function() {
    detectNetwork('6331107890123456789').should.equal('Switch');
  });
});

describe('China UnionPay', function() {
  for (var i = 622126; i < 622926; i++) {
    (function(index) {
      it('has a prefix of ' + index.toString() + ' and a length of 16', function() {
      detectNetwork(index.toString() + '7890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + index.toString() + ' and a length of 17', function() {
      detectNetwork(index.toString() + '78901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + index.toString() + ' and a length of 18', function() {
      detectNetwork(index.toString() + '789012345678').should.equal('China UnionPay');
      });
      it('has a prefix of ' + index.toString() + ' and a length of 19', function() {
      detectNetwork(index.toString() + '7890123456789').should.equal('China UnionPay');
      });
    })(i);
  };
  for (var i = 624; i < 627; i++) {
    (function(index) {
      it('has a prefix of ' + index.toString() + ' and a length of 16', function() {
      detectNetwork(index.toString() + '4567890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + index.toString() + ' and a length of 17', function() {
      detectNetwork(index.toString() + '45678901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + index.toString() + ' and a length of 18', function() {
      detectNetwork(index.toString() + '456789012345678').should.equal('China UnionPay');
      });
      it('has a prefix of ' + index.toString() + ' and a length of 19', function() {
      detectNetwork(index.toString() + '4567890123456789').should.equal('China UnionPay');
      });
    })(i);
  };
  for (var i = 6282; i < 6289; i++) {
    (function(index) {
      it('has a prefix of ' + index.toString() + ' and a length of 16', function() {
      detectNetwork(index.toString() + '567890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + index.toString() + ' and a length of 17', function() {
      detectNetwork(index.toString() + '5678901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + index.toString() + ' and a length of 18', function() {
      detectNetwork(index.toString() + '56789012345678').should.equal('China UnionPay');
      });
      it('has a prefix of ' + index.toString() + ' and a length of 19', function() {
      detectNetwork(index.toString() + '567890123456789').should.equal('China UnionPay');
      });
    })(i);
  };
});

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
