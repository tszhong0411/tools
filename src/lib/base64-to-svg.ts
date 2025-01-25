import { imageToBase64 } from './image-to-base64'

export const base64ToSvg = (file: Blob, callback: (result: string) => void) => {
  imageToBase64(file, (result) => {
    const image = new Image()

    image.addEventListener('load', () => {
      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      const imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image')

      imageElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', result)

      svgElement.setAttribute('width', `${image.width}`)
      svgElement.setAttribute('height', `${image.height}`)

      svgElement.append(imageElement)

      const svgString = new XMLSerializer().serializeToString(svgElement)

      const svgBlob = new Blob([svgString], { type: 'image/svg+xml' })

      const objectURL = URL.createObjectURL(svgBlob)

      callback(objectURL)
    })

    image.src = result
  })
}
