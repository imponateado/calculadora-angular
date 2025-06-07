import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayValue: string = '0';

  private firstOperand: number | null = null;
  private operador: string | null = null;
  private waitingForSecondOperand: boolean = false;

  private calculate(firstOperand: number, secondoperand: number, operator: string): number {
    switch(operator) {
      case '+':
        return firstOperand + secondoperand;
      case '-':
        return firstOperand - secondoperand;
      case 'x':
        return firstOperand * secondoperand;
      case '/':
        if (secondoperand === 0) {
          alert('Divisão por zero não permitida');
          return NaN;
        }
        return firstOperand / secondoperand;
      default:
          return NaN;
    }
  }


  handleButtonClick(value: string): void {
    if (value === '.') {
      if (this.displayValue.includes('.')) {
        return;
      }

      if (this.displayValue === '0') {
        this.displayValue = '0.';
      } else {
        this.displayValue += value;
      }
    }

    if (!isNaN(parseFloat(value))) {
      if (this.displayValue === '0') {
        this.displayValue = value;
      } else {
        this.displayValue += value;
      }
    }

    if (value === '+' || value === '-' || value === 'x' || value === '/') {
      this.displayValue += value;
      return;
    }

    if (value === 'C') {
      this.displayValue = '0';
      this.firstOperand = null;
      this.operador = null;
      this.waitingForSecondOperand = false;
      return;
    }


  }

  constructor() { }

  title = 'calculadora';
}
