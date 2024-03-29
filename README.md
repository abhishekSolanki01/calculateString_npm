# calculateString_npm
It is a Javascript library for applying complex mathematical operation on string

## Installation

Use the package manager [npm](https://www.npmjs.com/package/@celestial-cribe/calculate-string) to install.

```bash
npm install @celestial-cribe/calculate-string
```

## Usage

```javascript
import Calculator from '@celestial-cribe/calculate-string'

// instantiating the Calculator class 
let calc = new Calculator()

// passing sting in calculate function
calc.calculate("9 +   2 *    (   6 - (4 + 1) / 2) + 7")

// calculated result can be read from "result" property of class 
console.log(calc.getResult(result))
// or
console.log(calc.result)


```

## Components
|  | Methods | paramaters| Usage |
|--- |--- |--- |--- |
| 1 | add| n: number | add and update result property |
| 2 | subtract | n: number | subtract and update result property|
| 3 | multiply| n: number | multiply and update result property|
| 4 | divide | n: number | divide and update result property|
| 5 | clear|  | clear result property |
| 6 | getResult |  | return result property|
| 7 | isGreaterPriority| o1: "+" \| "-" \| "*" \| "/" , <br> o2:  "+" \| "-" \| "*" \| "/"  | return true if priority of o1 is greator than o2 |
| 8 | operate| n1: number, <br> operation: "+" \| "-" \| "*" \| "/", <br> n2: number | perform provided operation on operandes n1 and n2 |
| 9 | calculate | str: string | calculate the methamatical operation on string |




## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)
