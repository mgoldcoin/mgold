# Waves Contracts Implementation Details

While the user writes WavesContracts code in high-level language, Waves Contracts execution engine is a straightforward evaluator of low-level expression tree within context. In order to achieve that, there're several stages which make text script produce an an execution result. These are:

* Parsing
* Typechecking & Compiling
* Evaluating



