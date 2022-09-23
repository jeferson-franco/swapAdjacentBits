const solution = require('./swapAdjacentBits.js');

test('test 1', () => {
    expect(solution(13)).toBe(14);
});

test('test 2', () => {
    expect(solution(74)).toBe(133);
});

test('test 3', () => {
    expect(solution(1073741823)).toBe(1073741823);
});

test('test 4', () => {
    expect(solution(0)).toBe(0);
});

test('test 5', () => {
    expect(solution(1)).toBe(2);
});

test('test 6', () => {
    expect(solution(83748)).toBe(166680);
});
