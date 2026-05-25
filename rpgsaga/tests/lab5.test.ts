import { describe, expect, it } from "vitest";
import { Computer } from "../src/Task_TS/lab5";

describe("Класс Computer", () => {
  const brand = "Kraftway";
  const model = "IC220";
  const size = 512;

  it("конструктор должен правильно создавать объект", () => {
    const pc = new Computer(brand, model, size);
    expect(pc.brand).toBe(brand);
    expect(pc.model).toBe(model);
    expect(pc.getSize()).toBe(size);
  });

  it("setSize должен изменять размер диска", () => {
    const pc = new Computer(brand, model, size);
    pc.setSize(1024);
    expect(pc.getSize()).toBe(1024);
  });

  it("getSize должен возвращать текущий размер", () => {
    const pc = new Computer(brand, model, size);
    expect(pc.getSize()).toBe(size);
  });

  it("print не должен выбрасывать ошибку", () => {
    const pc = new Computer(brand, model, size);
    expect(() => pc.print()).not.toThrow();
  });
});