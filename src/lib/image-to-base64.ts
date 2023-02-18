export const imageToBase64 = (
  file: Blob,
  callback: (result: string) => void
) => {
  const reader = new FileReader()

  reader.addEventListener('load', (e) => {
    if (e.target) {
      callback(e.target.result as string)
    }
  })

  reader.readAsDataURL(file)
}
