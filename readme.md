# Simple WebASseMbly (WASM) project

## Quickstart

1. Checkout code and run index.htm in browser using a webserver (or statically hosted on the web), e.g. terminal command (assuming http-server is installed): `/usr/bin/http-server index.html`

## What?

* Call compiled binary code (written in C, C++, Rust, etc.) from Javascript within the browser!
* Currently supported in all major browsers
* Implemented inside existing JavaScript engines ensuring existing security sandboxing mechanisms
* Initial focus on C/C++
* C/C++ memory heap provided by Javascript (wrapped around the array buffer)
  * Fun fact: this means you could write valid code that dereferences NULL, with 0x00 being a valid address to the beginning of the array buffer!
  * No system allocation commands like `malloc` and `free` (roll your own)

## Why?

* Fast (near-native speeds)
* Leverage existing C/C++ code

## How?

1. Write code in C/C++
2. Compile to .wasm file
  * Online via: https://mbebenita.github.io/WasmExplorer/
  * Produces a WebAssembly Text Format (WAT) file, which is a more human-readable sourcemap (of sorts)
  * WASM file exports (i.e. exposes) functions to Javascript
  * `_Z7` prefix and `i` suffix are debug markers introduced by the C++ compiler
3. Asynchronously call the browser WebAssembly API
  * Stream WASM file into an array buffer (typed binary data, processed faster than regular array)
  * Compile bytes into a WebAssembly module (i.e. class)
  * Instantiate the module (i.e. instance of class). Contains memory and functions.

## Use Cases

* Entire C/C++ app, wrapped in Javascript
* WASM component within an existing HTML/CSS/JS app
* Web application with high-performance WASM modules

## Limitations

* Future support for WASM files via the upcoming `<script type='module'>`
* Non-number function arguments or return types require use of the module memory 
* No debugging

## References

* https://medium.freecodecamp.org/get-started-with-webassembly-using-only-14-lines-of-javascript-b37b6aaca1e4
* https://webassembly.org/demo/Tanks/ (3D tank game)
* https://s3.amazonaws.com/mozilla-games/ZenGarden/EpicZenGarden.html (Zen garden 3D world)
* https://m1el.github.io/wasm-asteroids/demo/demo.html (Asteroids game)
* https://www.funkykarts.rocks/demo.html (Runner game)
* https://jakedeichert.github.io/wasm-astar/ (Pathfinding algorithm written in Rust)
* https://github.com/mbasso/awesome-wasm (Aggregated resources)
