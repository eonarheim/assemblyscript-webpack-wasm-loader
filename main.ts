
// wasmBuilder for https://github.com/ballercat/wasm-loader webpack loader
import wasmBuilder from './wasm/wasm-adder.wasm';
// Following the example here https://www.assemblyscript.org/loader.html#typescript-definitions
import type AdderModule from './wasm/types';

wasmBuilder<typeof AdderModule>({
    env: {
        memory: new WebAssembly.Memory({ initial: 1}),
        abort: () => {}
    }
}).then(wasm => {
    const Adder = wasm.instance.exports;
    const results = Adder.add(1, 2);
    document.write('Huzzah! 1 + 2 = ' + results)
});
