class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.str = [];
    this.str[0] = initialValue;
  }

  add(number) {
    // your implementation
    this.str.push('+');
    this.str.push(number);
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.str.push('-');
    this.str.push(number);
    return this;
  }

  multiply(number) {
    // your implementation
    this.str.push('*');
    this.str.push(number);
    return this;
  }

  devide(number) {
    // your implementation 
    this.str.push('/');
    this.str.push(number);
    return this;
  }

  pow(number) {
    // your implementation
    this.str.push('^');
    this.str.push(number);
    return this;
  }

  valueOf(){
    let arrX = this.str.slice();
    // по степеням с право на лево
    for (let i = arrX.length - 1; i > 0; i--){
      if (arrX[i] == '^') {
        arrX[i - 1] = Math.pow(arrX[i - 1], arrX[i + 1]);
        arrX.splice(i, 2); // сместить на пустующие теперь две клетки
      } 
    }
    // по умножению и делению
    for (let i = arrX.length - 1; i > 0; i--) {
      if (arrX[i] == '*') {
        arrX[i - 1] = arrX[i - 1] * arrX[i + 1];
        arrX.splice(i, 2); // сместить на пустующие теперь две клетки
        continue; 
      }
      if (arrX[i] == '/') {
        arrX[i - 1] = arrX[i - 1] / arrX[i + 1];
        arrX.splice(i, 2); // сместить на пустующие теперь две клетки
      }
    }
    // сложение и вычетание
    for (let i = 0; i < arrX.length; i++) {
      if (arrX[i] == '+') {
        arrX[i - 1] = arrX[i - 1] + arrX[i + 1];
        arrX.splice(i, 2); // сместить на пустующие теперь две клетки
        i--;
        continue; 
      }
      if (arrX[i] == '-') {
        arrX[i - 1] = arrX[i - 1] - arrX[i + 1];
        arrX.splice(i, 2); // сместить на пустующие теперь две клетки
        i--;
      }
    }
    return  arrX[0];
  }
}
module.exports = SmartCalculator;
