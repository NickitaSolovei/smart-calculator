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
    var x = this.str.slice();
    // по степеням с право на лево
    for (var i = x.length - 1; i > 0; i--){
      if (x[i] == '^') {
        x[i - 1] = Math.pow(x[i - 1], x[i + 1]);
        x.splice(i, 2); // сместить на пустующие теперь две клетки
      } 
    }
    // по умножению и делению
    for (var i = x.length - 1; i > 0; i--) {
      if (x[i] == '*') {
        x[i - 1] = x[i - 1] * x[i + 1];
        x.splice(i, 2); // сместить на пустующие теперь две клетки
        continue; 
      }
      if (x[i] == '/') {
        x[i - 1] = x[i - 1] / x[i + 1];
        x.splice(i, 2); // сместить на пустующие теперь две клетки
      }
    }
    // сложение и вычетание
    for (var i = 0; i < x.length; i++) {
      if (x[i] == '+') {
        x[i - 1] = x[i - 1] + x[i + 1];
        x.splice(i, 2); // сместить на пустующие теперь две клетки
        i--;
        continue; 
      }
      if (x[i] == '-') {
        x[i - 1] = x[i - 1] - x[i + 1];
        x.splice(i, 2); // сместить на пустующие теперь две клетки
        i--;
      }
    }
    return  x[0];
  }
  

}

module.exports = SmartCalculator;
