export const randomID = async () => {
  return Math.floor(Math.random() * (1000002 - 1 + 1)) + 1
}
