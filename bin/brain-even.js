#!/usr/bin/env node
import main from '../src/index.js'
import randomInt from '../src/random.js'

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".'

const roundData = () => {
  const RANDOM_NUMBER = randomInt(1, 100)
  const isEven = RANDOM_NUMBER % 2 === 0
  const correctAnswer = (isEven) ? 'yes' : 'no'

  return [RANDOM_NUMBER, correctAnswer]
}

main(GAME_DESCRIPTION, roundData)
