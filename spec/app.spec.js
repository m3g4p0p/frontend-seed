/* eslint-env jasmine */
import app from '../src/app'

describe('app', () => {
  it('should be hello world', () => {
    const el = document.createElement('div')
    expect(app(el).textContent).toBe('Hello world!')
  })
})
