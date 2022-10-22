type imageToBase64Props = (
  file: Blob,
  callback: (result: string) => void
) => void

export const imageToBase64: imageToBase64Props = (file, callback) => {
  const reader = new FileReader()

  reader.addEventListener('load', (e) => {
    callback(e.target.result as string)
  })

  reader.readAsDataURL(file)
}
