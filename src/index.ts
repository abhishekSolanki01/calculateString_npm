class Calculator {
  result: number

  constructor() {
    this.result = 0
  }

  add(n: number) { this.result += n }

  subtract(n: number) { this.result -= n }

  multiply(n: number) { this.result *= n }

  divide(n: number) { this.result /= n }

  clear() { this.result = 0 }

  getResult() { return this.result }

  isGreaterPriority(o1: string, o2: string) {
    if (!(["+", "-", "*", "/"].includes(o1) && ["+", "-", "*", "/"].includes(o2))) {
      return false
    }
    let o1priority = ["+", "-"].includes(o1) ? 1 : 2;
    let o2priority = ["+", "-"].includes(o2) ? 1 : 2;
    if (o1priority === o2priority) {
      return true
    } else if (o1priority > o2priority) {
      return false
    } else {
      return true
    }
  }

  operate(n1: number, operation: String, n2: number): number | null {
    switch (operation) {
      case "+": return n1 + n2;
        break;
      case "-": return n1 - n2;
        break;
      case "*": return n1 * n2;
        break;
      case "/": return n1 / n2;
        break;
      default: return null
    }
  }

  getOneDigitOrChar(str: String, i: number) {
    // let a = this.i
    let ch = str.charAt(i);
    while (++i) {
      //@ts-ignore
      if (!isNaN(str.charAt(i))) {
        ch += str.charAt(i);
      } else {
        return ch;
      }
    }
    return ch
  }

  calculate(string: String) {
    // using two stacks - constraint ()
    let str = string.replaceAll(" ", "")

    let operationStack = []
    let numberStack = []
    for (let i = 0; i < str.length; i++) {
      let c = str.charAt(i);
      //@ts-ignore
      while (!isNaN(c) && i < str.length - 1 && !isNaN(str.charAt(i + 1))) {
        i++
        c += str.charAt(i);
      }

      if (["+", "-", "/", "*"].includes(c)) {
        while (operationStack.length > 0 &&
          operationStack[operationStack.length - 1] !== "(" &&
          this.isGreaterPriority(c, operationStack[operationStack.length - 1])
        ) {
          let c1 = operationStack.pop()
          let n2 = numberStack.pop();
          let n1 = numberStack.pop();
          //@ts-ignore
          let res = this.operate(n1, c1, n2);
          numberStack.push(res);
        }
        operationStack.push(c);

      } if (c === "(") {
        operationStack.push(c);
      } else if (c === ")") {
        // pop till --> ")"
        while (operationStack[operationStack.length - 1] !== "(") {
          //@ts-ignore
          c = operationStack.pop();
          let n2 = numberStack.pop();
          let n1 = numberStack.pop();
          //@ts-ignore
          let res = this.operate(n1, c, n2);
          numberStack.push(res);
        }
        operationStack.pop()
        //@ts-ignore
      } if (!isNaN(c)) {
        numberStack.push(Number(c))
      }
    }
    while (operationStack.length && operationStack[operationStack.length - 1] !== "(") {
      let c = operationStack.pop();
      let n2 = numberStack.pop();
      let n1 = numberStack.pop();
      //@ts-ignore
      let res = this.operate(n1, c, n2);
      numberStack.push(res);
    }
    operationStack.pop()
    //@ts-ignore
    this.result = numberStack[0];
    return { operationStack, numberStack }
  }
}

export default Calculator;