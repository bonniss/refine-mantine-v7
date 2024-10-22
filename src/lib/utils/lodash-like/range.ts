function range(start: number, end?: number, step?: number): number[] {
  if (end === undefined) {
    // Handle the case where only one argument is passed
    end = start;
    start = 0;
  }
  if (step === undefined) {
    step = 1;
  }
  const length = Math.max(Math.ceil((end - start) / step), 0);
  return Array.from({ length }, (_, i) => start + i * step);
}

export default range;
