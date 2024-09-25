import { wasmWrapper } from './wasmUtils.js';

function main(input) {
  // Extract the number part from the previous ID
  const previousNumber = parseInt(input.previous_id.split('-')[1]);

  // Calculate the next number
  let nextNumber = previousNumber + 1;

  // If the next number exceeds 99999999, restart from 1
  if (nextNumber > 99999999) {
    nextNumber = 1;
  }

  // Pad the number with leading zeros to ensure it's always 8 digits
  const paddedNumber = nextNumber.toString().padStart(8, '0');

  // Return the new ID in the required format
  return {
    order_number: `JB-${paddedNumber}`,
  };
}

wasmWrapper(main)();
