import main from '../index.js'
import randomInt from '../random.js'

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b)

const roundData = () => {
  const a = randomInt(1, 50)
  const b = randomInt(1, 50)

  const question = `${a} ${b}`
  const correctAnswer = gcd(a, b)

  return [question, String(correctAnswer)]
}

export default () => {
  main(GAME_DESCRIPTION, roundData)
}
