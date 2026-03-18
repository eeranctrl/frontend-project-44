#!/usr/bin/env node
import main from '../src/index.js'

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b)

const roundData = () => {
  const a = Math.floor(Math.random() * 50) + 1
  const b = Math.floor(Math.random() * 50) + 1

  const question = `${a} ${b}`
  const correctAnswer = gcd(a, b)

  return [question, String(correctAnswer)]
}

main(GAME_DESCRIPTION, roundData)
