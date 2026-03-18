import readlineSync from 'readline-sync'

export default function askQuestion(question) {
  const answer = readlineSync.question(`${question} `)
  return answer
}
