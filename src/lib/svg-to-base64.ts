export const svgToBase64 = (file: Blob, callback: (result: string) => void) => {
  const reader = new FileReader()

  reader.addEventListener('load', (e) => {
    if (e.target && e.target.result) {
      const svgURL = URL.createObjectURL(
        new Blob([e.target.result], {
          type: 'image/svg+xml',
        }),
      )

      const svgImage = document.createElement('img')

      // Set the style to prevent it from appearing in the body
      // but make sure it has height and width
      svgImage.style.position = 'absolute'
      svgImage.style.opacity = '0'
      svgImage.style.visibility = 'hidden'

      document.body.appendChild(svgImage)

      svgImage.addEventListener('load', () => {
        const canvas = document.createElement('canvas')
        canvas.width = svgImage.clientWidth
        canvas.height = svgImage.clientHeight
        canvas.getContext('2d')?.drawImage(svgImage, 0, 0)

        const dataURL = canvas.toDataURL('image/png')

        callback(dataURL)

        document.body.removeChild(svgImage)
      })

      svgImage.src = svgURL

      reader.readAsText(file)
    }
  })
}
