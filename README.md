# SideEffector
An *Effect* monad library. Allows you to defer dealing with impurities until you actually run them.

[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

## Quickstart
### Importing the library
#### Import via `require`
```javascript
const SideEffector = require('side-effector')
```

#### Import as ES module
```javascript
import SideEffector from 'side-effector'
```

#### Import in the browser
```html
<script src="https://cdn.jsdelivr.net/npm/side-effector@0.1.1/side-effector.min.js"></script>
```

### Using the library
To create a SideEffector, give it a function.

#### Example:
```javascript
const lazyZero = SideEffector(() => 0)
```

#### Apply a function using `map()`
To apply a function to this object, we use the `map()` method.
It's important to remember that the function will not be immediately applied.

##### Example: 
```javascript
const toAddOne = lazyZero.map(x => x + 1)
const toDisplayPlusOne = toAddOne.map(x => console.log(x + 1))
```

#### Run the side effects using `run()`
To actually run the side effects, we use the `run()` method like this:

##### Example:
```javascript
toDisplayPlusOne.run() // 2
```

## Notes
Derived from James Sinclair's post, [How to Deal with Dirty Side-Effects in Your Pure Functional JavaScript](https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript).

## License
MIT
