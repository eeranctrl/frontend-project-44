import askQuestion from './cli.js'

const ROUNDS = 3

export default function main(description_game, roundData) {
  console.log('Welcome to the Brain Games!')
  const name = askQuestion('May I have your name?')
  console.log(`Hello, ${name}!`)

  console.log(description_game)

  for (let i = 0; i < ROUNDS; i += 1) {
    const [question, correctAnswer] = roundData()

    console.log(`Question: ${question}`)
    const userAnswer = askQuestion('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
