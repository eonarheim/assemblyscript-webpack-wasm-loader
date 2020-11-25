# Example AssemblyScript with Webpack and the wasm-loader

This is an AssemblyScript quick start! Check out the [blog post explainer](https://erikonarheim.com/posts/webpack-assemblyscript-and-wasm-loader) 😎

The AssemblyScript (which is a subset of TypeScript) is located here `./wasm/assemblyscript/`, and has a special `tsconfig.json` that tells it about the special wasm types.

Another file of interest is `files.d.ts` which delcares the TypeScript typed interface for the `wasm-loader`.

## Local dev

* `npm install`
* `npm start` - starts webpack build server