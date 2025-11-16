import { useEffect, useState } from "react"

export function useLocalStorageState<T>(
  key: string,
  initialValue: T | (() => T)
) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return resolveInitial(initialValue)

    try {
      const item = window.localStorage.getItem(key)
      if (item === null) return resolveInitial(initialValue)
      return JSON.parse(item) as T
    } catch {
      return resolveInitial(initialValue)
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore quota / private mode errors
    }
  }, [key, value])

  return [value, setValue] as const
}

function resolveInitial<T>(initialValue: T | (() => T)): T {
  return typeof initialValue === "function"
    ? (initialValue as () => T)()
    : initialValue
}
