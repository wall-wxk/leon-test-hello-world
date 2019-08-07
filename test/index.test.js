import Say from '../dist/leon-test-hello-world.cjs.js'
import {
    assert
} from 'chai';
import hello from './check.esm';

describe('hello world test', function(){
    it('say() has return string', function(){
        const sayStr = Say.say();
        hello();
        assert.typeOf(sayStr, 'string');
    })
})