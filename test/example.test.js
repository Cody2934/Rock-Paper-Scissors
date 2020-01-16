import { checkResult } from '../throwfunction.js';

const test = QUnit.test;
QUnit.module('checkResult');

test('Paper beats rock', assert => {
    const player = 'paper';
    const computer = 'rock';
    const expected = 'win';
    const result = checkResult(player, computer);
    assert.equal(result, expected);
});

test('Rock beats scissors', assert => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'win';
    const result = checkResult(player, computer);
    assert.equal(result, expected);
});

test('Paper loses to scissors', assert => {
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'lose';
    const result = checkResult(player, computer);
    assert.equal(result, expected);
});

test('Also scissors beat paper', assert => {
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'win';
    const result = checkResult(player, computer);
    assert.equal(result, expected);
});

test('a draw', assert => {
    const player = 'paper';
    const computer = 'paper';
    const expected = 'draw';
    const result = checkResult(player, computer);
    assert.equal(result, expected);
});
