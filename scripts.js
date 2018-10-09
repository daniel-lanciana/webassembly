let squarer;

function loadWebAssembly(fileName) {
  // Must be run in a web server otherwise fails to fetch local file:// with the message:
  // URL scheme must be "http" or "https" for CORS request.
  // Minimal server: https://www.npmjs.com/package/http-server 
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => { return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('test.wasm')
  .then(instance => {
  	// Exported function name listed in the generated WAT file
    squarer = instance.exports._Z7squareri;
    console.log('Finished compiling! Run squarer(9) in the console to try it out..');
  });

let squareInput = () => {
  let elem = document.getElementById('input');
  elem.value = squarer(elem.value);
};