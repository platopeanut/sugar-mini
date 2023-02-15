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

// 一维线性插值
export function interpolate1D(a: number, b: number, ratio: number): number {
  return a + (b - a) * ratio
}

// 多维线性插值
export function interpolate(v1: number[], v2: number[], ratio: number): number[] {
  const v: number[] = []
  for (let i = 0; i < v1.length; i++) {
    v.push(interpolate1D(v1[i], v2[i], ratio))
  }
  return v
}
