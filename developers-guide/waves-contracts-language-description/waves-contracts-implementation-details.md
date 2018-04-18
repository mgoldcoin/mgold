# Waves Contracts Implementation Details

While the user writes WavesContracts code in high-level language, Waves Contracts execution engine is a straightforward evaluator of low-level expression tree within context. In order to achieve that, there're several stages which make text script produce an an execution result. These are:

1. Parsing.
2. Typechecking & Compiling.
3. Evaluating.

# 1. Parsing Stage

Parser builds untyped Abstract Syntax Tree\(AST\) from script text. Only syntax rules are checked at this phase, like correct variable names, function invocation with `()` and so on.

The syntax doesn't require line breaks \(`\n`\) or `;`. The full description goes as follows:

```js
number = [+-]?['0'-'9']+
string = """, [1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-]*, """
byteVector = "base58'", [123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]* , "'"
binaryOp = expr , ("||" | "&&" | "==" | ">=" | ">" | "+") , expr 
expression = binaryOp | atom
varName = {latin-numeric string strating with char, excluding keywords}
let = "let " , varName , "=" , block
block = let? , expr
if = "if" , "(" , block , ")" , "then" , block , "else" , block
ref = varName
getter = ref , "." , varName
functionCall = varName , "(" , expr* , ")"
braces = "(" , block , ")"
curlyBraces = "{" , block , "}"
atom = if | functionCall | byteVector | string | number | braces | curlyBraces | getter | ref
```

All types available are:

| Types | Description  |
| :--- | :--- |
| Bottom Type | NOTHING |
| Primitive Types | UNIT, LONG, BYTEVECTOR, BOOLEAN, STRING |
| Complex Types | TYPEREF\(typename\) and Option\(Type\) |

**Note. **User can't create new types, only predefined ones are available.

Parser generated AST is based on the following constructs:



