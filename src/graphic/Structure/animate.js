export default (animation, frameRate = 60, stop = null) => {
  let frameCount = 0
  return new Promise((res, rej) => {
    let interval = setInterval(() => {
      animation()
      frameCount++
      if (frameCount === stop) {
        clearInterval(interval)
        res(frameCount)
      }
      if (frameCount === 1800000) {
        rej({
          status: 'ANIMATION STOPPED',
          message: 'animation exceeded maximum length (30 mins), if you require a longer interval please consult the docs'
        })
      }
    }, 1000 / frameRate)
  })
}