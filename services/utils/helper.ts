export const toJson = (data: string) => {
  if (!data) {
    return
  }
  const convertedDataStr = data.replace('/**/(', '').replace(');','')
  return JSON.parse(convertedDataStr)
}
