
function sum(a: number, b: number) {
    const res = a + b;
    return res;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
