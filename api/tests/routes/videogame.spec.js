/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
};

describe('Videogame routes', () => {

  describe('Get Games:', function() {
    it('GET respons with status 200', function(){
      return agent
        .get('/games')
        .expect(function(res){
          expect(res.status).equal(200)})
    }).timeout(10000)
  

    })
    


});
