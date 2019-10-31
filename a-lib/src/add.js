export function add(...args) {
  return args.reduce((result, current) => result + current, 0);
}
