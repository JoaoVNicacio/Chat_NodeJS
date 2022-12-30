const request = require('request')

// Messages GET tests:
describe('Get the messages in MongoDB', () => {

  // Test if the connect and request is sucessful:
  it('should return request response: 200 (OK)', (done) => {

    request.get('http://localhost:3000/messages', (err, res) => {
      expect(res.statusCode).toEqual(200)
      done()

    })
  })

  // Test if the request body has at least a message:
  it('should return one or more messages', (done) => {

    request.get('http://localhost:3000/messages', (err, res) => {
      expect(JSON.parse(res.body.length)).toBeGreaterThan(0)
      done()

    })
  })

})