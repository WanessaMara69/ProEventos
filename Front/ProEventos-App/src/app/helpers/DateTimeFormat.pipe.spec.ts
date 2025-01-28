import { TestBed } from '@angular/core/testing';
import { DateTimeFormatPipe } from './DateTimeFormat.pipe';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

describe('Pipe: DateTimeFormat', () => {
  beforeAll(() => {
    // Registra o locale português do Brasil
    registerLocaleData(localePt, 'pt-BR');
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' } // Configura o locale para o teste
      ]
    });
  });

  it('create an instance', () => {
    const locale = TestBed.inject(LOCALE_ID);
    const pipe = new DateTimeFormatPipe(locale); // Passa o locale para o pipe
    expect(pipe).toBeTruthy();
  });

  it('should format a date correctly', () => {
    const locale = TestBed.inject(LOCALE_ID);
    const pipe = new DateTimeFormatPipe(locale);

    const date = new Date('2025-01-28T14:30:00'); // Data de teste
    const formattedDate = pipe.transform(date);

    expect(formattedDate).toBe('28/01/2025 14:30'); // Verifica o formato esperado
  });
});
