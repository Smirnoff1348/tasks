export function calculateY(x: number, a: number, b: number, alpha: number): number {
  if (x > 5) {
    const logVal = Math.log10(a * a + x);
    return (logVal * logVal) / ((a + x) * (a + x));
  } else {
    return (a + b * x) ** 3.5 / (1.8 + Math.cos(alpha * x) ** 3);
  }
}

export function TaskA(a: number, b: number, alpha: number, x_start: number, x_end: number, dx: number): string[] {
  const results: string[] = [];
  for (let x = x_start; x <= x_end; x += dx) {
    const y = calculateY(x, a, b, alpha);
    results.push(`x = ${x}, y = ${y}`);
  }
  return results;
}

export function TaskB(a: number, b: number, alpha: number, x_values: number[]): string[] {
  const results: string[] = [];
  for (let i = 0; i < x_values.length; i += 1) {
    const x = x_values[i];
    const y = calculateY(x, a, b, alpha);
    results.push(`x${i + 1} = ${x}, y = ${y}`);
  }
  return results;
}

const a_val = 2.5;
const b_val = 3.4;
const alpha_val = 3.5;

console.log("Задача А");
console.log(TaskA(a_val, b_val, alpha_val, 1.2, 5.2, 0.8));

console.log("\nЗадача Б");
console.log(TaskB(a_val, b_val, alpha_val, [-2.5, 3.4, 3.5, 6.5, 0.6, 2.89, 3.54, 5.21, 6.28, 3.48]));