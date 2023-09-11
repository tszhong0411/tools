export const truncateFilename = (filename: string) => {
  const length = filename.length

  return length > 40
    ? `${filename.slice(0, 20)}...${filename.slice(-10)}`
    : filename
}
