import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });
  it('deve garantir que 1 + 4 = 5', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
  });
  it('deve garantir que 4 - 2 = 2', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
      let subtrai = service.calcular(4, 2, CalculadoraService.SUBTRACAO);
      expect(subtrai).toEqual(2);
  });
  it('deve garantir que 10 / 2 = 5', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
      let divide = service.calcular(10, 2, CalculadoraService.DIVISAO);
      expect(divide).toEqual(5);
  });
  it('deve garantir que 5 * 5 = 25', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
      let multiplica = service.calcular(5, 5, CalculadoraService.MULTIPLICACAO);
      expect(multiplica).toEqual(25);
  });
});
