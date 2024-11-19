export const isNotEmptyObject = (obj: object): boolean => {
  console.log('🚀 ~ isEmptyObject ~ obj:', obj)
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      return true
    }
  }
  return false
}
