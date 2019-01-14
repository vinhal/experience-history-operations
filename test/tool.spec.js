const should = require('should')
const request = require('request')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const urlBase = 'http://localhost:3000'


describe('Teste api VUTTR', () => {

  it('Deve retornar uma lista de ferramentas',(done) => {
    request.get(
      {
        url: urlBase + '/tools'
      },
      (error, response, body) => {
        var _body = {}
        try{
          _body = JSON.parse(body)
        }
        catch(e){
          _body = {}
        }
        
        expect(response.statusCode).to.equal(200)

        assert.isOk(Array.isArray(_body), 'Não é um array!')
       
        done()
      }
    )
  })

  test_id = 0

  it('Deve criar uma nova ferramenta',(done) => {
    const payload = JSON.parse(`{
      "title": "pizza",
      "link": "https://github.com/pizzaCoders/pizza",
      "description": "Simple app to find the nearby pizza shop.",
      "tags": ["node", "food"]
    }`)

    request.post(
      {
        url: urlBase + '/tools',
        body: payload,
        json: true,
      },
      (error, response, body) => {
        
        expect(response.statusCode).to.equal(200)

        assert.isOk(body.should.have.property('_id'), 'Não é um array!')
        assert.isOk(body.should.have.property('title'), 'Não é um array!')
        assert.isOk(body.should.have.property('link'), 'Não é um array!')
        assert.isOk(body.should.have.property('description'), 'Não é um array!')
        assert.isOk(body.should.have.property('createdAt'), 'Não é um array!')

        test_id = body._id
                
        done()
      }
    )
  })

  it('Deve excluir a ferramenta criada no teste anterior',(done) => {
    request.get(
      {
        url: urlBase + '/tools/' + test_id
      },
      (error, response, body) => {

        expect(response.statusCode).to.equal(200)
        expect(body).to.deep.equal({})
               
        done()
      }
    )
  })

  it('Deve falhar ao excluir uma ferramenta',(done) => {
    request.delete(
      {
        url: urlBase + '/tools/1'
      },
      (error, response, body) => {
        
        expect(response.statusCode).to.equal(400)
        expect(body).to.empty

        if(body.should.have.property('error')) {
          expect(body.error).to.equal('Bad Request')
        }
        if(body.should.have.property('description')) {
          expect(body.description).to.equal('Resource not found.')
        }
                       
        done()
      }
    )
  })
})
