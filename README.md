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
console.log(calc.result)

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)
