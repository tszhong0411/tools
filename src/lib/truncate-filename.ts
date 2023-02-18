export const truncateFilename = (filename: string) => {
  const length = filename.length

  if (length > 40) {
    return `${filename.substring(0, 20)}...${filename.substring(
      length - 10,
      length
    )}`
  } else {
    return filename
  }
}
