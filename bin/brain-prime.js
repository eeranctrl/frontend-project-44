#!/usr/bin/env node
import main from '../src/index.js'
import randomInt from '../src/random.js'

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num < 2) return false

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false
    }
  }

  return true
}

const roundData = () => {
  const num = randomInt(1, 100)
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no'
  return [num, correctAnswer]
}

main(GAME_DESCRIPTION, roundData)
