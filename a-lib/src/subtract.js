export function subtract(...args) {
  return args.reduce((result, current) => result - current, 0);
}
