---
title: "CMinus Compiler"
description: "Compiler for the CMinus language featuring lexical analysis, parsing, semantic analysis, and code generation"
start: "2024"
end: "2024"
image: ""
---

### Project Overview
Developed a complete compiler for **CMinus**, a simplified subset of the C programming language. The compiler translates source code into intermediate code by implementing the core phases of compilation, including lexical analysis, syntax analysis, semantic analysis, and code generation.

### Key Features
- **Lexical Analysis:** Designed a lexer to tokenize CMinus source code and detect lexical errors.
- **Syntax Analysis:** Implemented a parser to construct and validate the program structure based on the language grammar.
- **Semantic Analysis:** Performed scope checking, type validation, and semantic error detection.
- **Code Generation:** Generated intermediate code for valid CMinus programs.
- **Error Handling:** Reported lexical, syntax, and semantic errors with informative diagnostics.

### Technologies Used
- **Python:** Core implementation language.
- **Compiler Design:** Lexer, Parser, Semantic Analyzer, and Code Generator.
- **Context-Free Grammars (CFG):** Language grammar specification and parsing.
- **Syntax Trees:** Internal representation of program structure.
- **Intermediate Code Generation:** Translation from source code to executable intermediate representation.

### Software Architecture
- **Lexer Module:** Tokenized input source code into lexical units.
- **Parser Module:** Constructed parse trees and validated syntax rules.
- **Semantic Analyzer:** Managed symbol tables, scope resolution, and type checking.
- **Code Generator:** Produced intermediate instructions for execution.
- **Error Reporter:** Centralized detection and reporting of compilation errors.

### Impact and Applications
- **Compiler Engineering:** Demonstrated the complete compilation pipeline from source code to intermediate code.
- **Programming Languages:** Strengthened understanding of language design and compiler construction.
- **Software Engineering:** Applied modular architecture for maintainability and extensibility.
- **Educational Tool:** Serves as a foundation for extending support to additional language features and compiler optimizations.