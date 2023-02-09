// [a..b]
export function range(a: number, b: number): number[] {
  const li: number[] = []
  for (let i = a; i <= b; i++) li.push(i)
  return li
}

// 补齐
export function prefix(num: number): string {
  return num >= 10 ? `${num}` : `0${num}`
}
