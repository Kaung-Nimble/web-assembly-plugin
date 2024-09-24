import { wasmWrapper } from './wasmUtils.js';

// The main function.
function greeting(input) {
    return { message: `Hello ${input.name}!` };
}

wasmWrapper(greeting)();