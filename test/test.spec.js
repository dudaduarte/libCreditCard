let chai = require('chai');
let expect = chai.expect;
let cardValidator = require('../lib/libCreditCard.js');

describe('Biblioteca Cartão de Crédito', () => {

  describe('função cardValidator', () => {

    describe('cartões válidos', () => {

      it('meu cartão virtual', () => {

        expect(cardValidator(5502099757664036)).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator('4012 0010 3714 1112')).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator('5442054108091705')).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator(30293810466644)).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator('6011137424214298')).to.equal(true);

      });
      it('cartão válido aleatório', () => {

        expect(cardValidator(372181965977158)).to.equal(true);

      });

    });
    describe('cartões INválidos', () => {

      it('cartão INválido', () => {

        expect(cardValidator(123456789012345)).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator('2003004005060708')).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator('472837284059123')).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator(820170273045072)).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator('5502199727664036')).to.equal(false);

      });
      it('cartão INválido', () => {

        expect(cardValidator(4012001037141135)).to.equal(false);

      });

    });

  });

});