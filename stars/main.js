import createAnimationLoop from '../common/createAnimationLoop.js'
import render from './render.js'

const gl = c.getContext('webgl')

const app = createAnimationLoop(timestamp => render(gl, timestamp))
app.start()
