import readlineSync from 'readline-sync';

export default function askQuestion(question) {
  const name = readlineSync.question(`${question} `);
  return console.log(`Hello, ${name}!`);
}