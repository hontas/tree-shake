export function multiply(...args) {
  return args.reduce((result, current) => result * current);
}
