# Simple WebASseMbly (WASM) project

## Quickstart

1. Checkout code and run index.htm in browser using a webserver (or statically hosted on the web)

## What?

* Call compiled binary code (written in C, C++, Rust, etc.) from Javascript within the browser!
* Currently supported in all major browsers

## Why?

* Fast (near-native speeds)
* Leverage existing C/C++ code

## How?

1. Write code in C, C++, Rust, etc.
2. Compile to WebAssembly .wasm file
  * Online via: https://mbebenita.github.io/WasmExplorer/
  * Produces a WebAssembly Text Format (WAT) file, which is a human-readable version of the WASM file
  * WASM file exports (i.e. exposes) functions to Javascript
  * `_Z7` prefix and `i` suffix are debug markers introduced by the C++ compiler
3. Asynchronously call the browser WebAssembly API
  * Stream WASM file into an array buffer (typed binary data, processed faster than regular array)
  * Compile bytes into a WebAssembly module (i.e. class)
  * Instantiate the module (i.e. instance of class). Contains memory and functions.

## Limitations

* Future support for WASM files via the upcoming `<script type='module'>`
* Non-number function arguments or return types require use of the module memory 

## References

* https://medium.freecodecamp.org/get-started-with-webassembly-using-only-14-lines-of-javascript-b37b6aaca1e4
