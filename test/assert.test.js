const z = require('..')
const { when, id, is } = z

/* eslint-env jest */
describe('asserts primitive types', () => {
  describe('when() to down', () => {
    [
      [1, 'one'],
      ['2', 2],
      [true, false]
    ].forEach(item => {
      it(`z(${item[0]})(...when) -> ${item[1]}`, () => {
        const r = z(item[0])(
          x => when(x === 1, x !== 2)/* -> */('one'),
          x => when(/2/.test(x))/* -> */(parseInt(x, 10)),
          x => when(x)/* -> */(!x)
        )
        expect(r).toEqual(item[1])
      })
    })
  })

  describe('when() to right', () => {
    [
      [1, 'one']
    ].forEach(item => {
      it(`z(${item[0]})(...when) -> ${item[1]}`, () => {
        const r = z(item[0])(
          x => when(x === 1, x > 1)/* -> */('not sense'),
          x => when(x === 1, x > 0)/* -> */('one')
        )
        expect(r).toEqual(item[1])
      })
    })
  })

  describe('id()', () => {
    [
      [1, 1],
      [2, 2]
    ].forEach(item => {
      it(`z(${item[0]})(...id) -> ${item[1]}`, () => {
        const r = z(item[0])(
          x => id/* -> */(x)
        )
        expect(r).toEqual(item[1])
      })
    })
  })

  describe('is()', () => {
    [
      [1, Number, true],
      ['2', String, true],
      [false, Boolean, true],
      [[1, 2], Array, true],
      [{1: 1, 2: '2'}, Object, true]
    ].forEach(item => {
      it(`z(${item[0]})(is(${item[1].toString()})) -> ${item[2]}`, () => {
        const r = z(item[0])(
          is(item[1])/* -> */(item[2])
        )
        expect(r).toEqual(item[2])
      })
    })
  })
})
