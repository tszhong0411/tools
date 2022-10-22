type svgToBase64Props = (file: Blob, callback: (result: string) => void) => void

export const svgToBase64: svgToBase64Props = (file, callback) => {
  const reader = new FileReader()

  reader.addEventListener('load', (e) => {
    const svgURL = URL.createObjectURL(
      new Blob([e.target.result], {
        type: 'image/svg+xml',
      })
    )

    const svgImage = document.createElement('img')

    document.body.appendChild(svgImage)

    svgImage.addEventListener('load', () => {
      const canvas = document.createElement('canvas')
      canvas.width = svgImage.clientWidth
      canvas.height = svgImage.clientHeight
      const canvasCtx = canvas.getContext('2d')
      canvasCtx.drawImage(svgImage, 0, 0)
      const imgData = canvas.toDataURL('image/png')

      callback(imgData)

      document.body.removeChild(svgImage)
    })

    svgImage.src = svgURL
  })

  reader.readAsText(file)
}
