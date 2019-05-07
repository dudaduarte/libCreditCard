let chai = require('chai');
let expect = chai.expect;
let cardValidator = require('../lib/lib-credit-card.js');

describe('Biblioteca Cartão de Crédito', () => {
  describe('cartões válidos', () => {
    it('cartão válido string + espaços', () => {
      expect(cardValidator('4012 0010 3714 1112')).to.equal(true);
    });
    it('cartão válido string', () => {
      expect(cardValidator('5442054108091705')).to.equal(true);
    });
    it('cartão válido número', () => {
      expect(cardValidator(30293810466644)).to.equal(true);
    });
    it('cartão válido string', () => {
      expect(cardValidator('6011137424214298')).to.equal(true);
    });
    it('cartão válido número + ponto', () => {
      expect(cardValidator(3721.81965977158)).to.equal(true);
    });
  });
  describe('cartões inválidos', () => {
    it('cartão inválido número', () => {
      expect(cardValidator(123456789012345)).to.equal(false);
    });
    it('cartão inválido string', () => {
      expect(cardValidator('2003004005060708')).to.equal(false);
    });
    it('cartão inválido string', () => {
      expect(cardValidator('472837284059123')).to.equal(false);
    });
    it('cartão inválido número', () => {
      expect(cardValidator(820170273045072)).to.equal(false);
    });
    it('cartão inválido + espaços', () => {
      expect(cardValidator('5502 1997 2766 4036')).to.equal(false);
    });
    it('cartão inválido número', () => {
      expect(cardValidator(4012001037141135)).to.equal(false);
    });
  });
});