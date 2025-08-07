import { renderHook, act } from "@testing-library/react";
import useCounter from "../src/hooks/features/homepage/useCounter";
import { describe, it, expect } from "vitest";

describe("useCounter", () => {
  it("should initialize count and val to 0 and 1", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it("should increment count by val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it("should update val and increment by new val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it("should increment multiple times with updated val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(3);
    });
    act(() => {
      result.current.increment();
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(6);
  });

  it("should set val to 0 and increment does not change count", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(0);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(0);
  });
});
