import main from '../index.js'
import randomInt from '../random.js'
const GAME_DESCRIPTION = 'What number is missing in the progression?'

const roundData = () => {
  const start = randomInt(1, 20)
  const step = randomInt(2, 10)
  const length = randomInt(5, 10)
  const hiddenIndex = randomInt(0, length - 1)

  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')
  return [question, correctAnswer]
}

export default () => {
  main(GAME_DESCRIPTION, roundData)
}
