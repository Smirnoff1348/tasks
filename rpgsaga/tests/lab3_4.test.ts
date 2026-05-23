import { describe, expect, it } from "vitest";
import { calculateY, TaskA, TaskB } from "../src/Task_TS/lab3";

describe("Задачи А и Б", () => {
  const a = 2.5;
  const b = 3.4;
  const alpha = 3.5;

  // Тест calculateY
  it("calculateY должна возвращать число, не бесконечность", () => {
    const y = calculateY(3.4, a, b, alpha);
    expect(typeof y).toBe("number");
    expect(isFinite(y)).toBe(true);
  });

  // Задача А
  it("TaskA должна возвращать массив строк с результатами", () => {
    const results = TaskA(a, b, alpha, 1.2, 5.2, 0.8);
    expect(results.length).toBeGreaterThan(0);
  });

  // Задача Б
  it("TaskB должна возвращать столько же ответов, сколько было передано x", () => {
    const x_values = [-2.5, 3.4, 6.5];
    const results = TaskB(a, b, alpha, x_values);
    expect(results.length).toBe(x_values.length);
    expect(results[0]).toContain("x1 = -2.5");
  });
});