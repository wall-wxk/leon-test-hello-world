var Say = require('../dist/leon-test-hello-world.cjs.js');
var assert = require('chai').assert;

describe('hello world test', function(){
    it('say() has return string', function(){
        var sayStr = Say.say();
        assert.typeOf(sayStr, 'string');
    })
})