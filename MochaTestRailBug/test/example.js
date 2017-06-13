
var expect = require('chai').expect;
var chai = require('chai'),
    chaiHttp = require('chai-http');

chai.use(require('chai-json-schema'));
chai.use(chaiHttp);

describe("Bad Http", function () {
    this.timeout(15000);
    it ('C894 Get Google is bad request', function (done) {
        chai.request('https://google.com')
            .get('/img.png')
            .end(function(err,res){
                expect(res).to.have.status(200);

                done()
            })

    })

})