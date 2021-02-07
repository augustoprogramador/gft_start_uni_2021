const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

let value = 0

describe('Math class', function() { // descreve o que está sendo testado

    // hooks 
    // after() - permite executar instruções após todos os testes
    // afterEach() - permite executar instruções após todos os testes
    // before() - permite executar instruções antes de todos os testes
    // beforeEach() - permite executar instruções antes de cada teste, sem a necessidade de repetí-las no código
    beforeEach(function() {
        value = 0
    })

    // it('Sum two numbers', function() {// it descreve o comportamento esperado
    it('Sum two numbers', function(done) {// DONE - parâmetro disponibilizado pelo Mocha para validar funções assíncronas

        const math = new Math()
        this.timeout(3000)

        value = 5

        math.sum(value, 5, value => {
            expect(value).to.equal(10)
            done()
        })
    })

    it('Multiply two numbers', function() {
    // it.only('Multiply two numbers', function() { // only executa apenas esse teste
    // it.skip('Multiply two numbers', function() { // pula um teste específico
        const math = new Math()
        const obj = {
            name: 'Augusto Camargo'
        }

        const obj2 = {
            name: 'Augusto Camargo'
        }

        // expect(value).to.equal(0)
        // expect(obj).to.have.property('name').equal('Augusto Camargo')
        // expect(obj).to.equal(obj2)
        expect(obj).to.deep.equal(obj2)
    })

    it.only('Calls res with sum and index values', function() {
        const req = {}
        const res = {
            // load: sinon.spy() // verifica se a função foi invocada corretamente
            load: function load() {
                console.log('Called')
            }
        }

        // sinon.spy(res, 'load') // observa se o método foi chamado
        sinon.stub(res, 'load').returns('xpto') // substitui o método

        const math = new Math()

        math.printSum(req, res, 5, 5)

        // expect(res.load.calledOnce).to.be.true
        expect(res.load.args[0][0]).to.equal('index')
        // expect(res.load.args[0][1]).to.equal(10)
    })
})