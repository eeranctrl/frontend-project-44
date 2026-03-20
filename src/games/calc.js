import main from '../index.js'
import randomInt from '../random.js'

const GAME_DESCRIPTION = 'What is the result of the expression?'

let calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
  }
}

const roundData = () => {
  let a = randomInt(1, 25)
  let b = randomInt(1, 25)
  let operators = ['+', '-', '*']
  let operator = operators[Math.floor(Math.random() * operators.length)]

  let correctAnswer = String(calculate(a, b, operator))
  let question = `${a} ${operator} ${b}`

  return [question, correctAnswer]
}

export default () => {
  main(GAME_DESCRIPTION, roundData)
}
