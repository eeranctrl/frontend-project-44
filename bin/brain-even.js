#!/usr/bin/env node
import main from '../src/index.js'

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".'

const roundData = () => {
  const RANDOM_NUMBER = Math.floor(Math.random() * 100) + 1
  const isEven = RANDOM_NUMBER % 2 === 0
  const correctAnswer = (isEven) ? 'yes' : 'no'

  return [RANDOM_NUMBER, correctAnswer]
}

main(GAME_DESCRIPTION, roundData)
