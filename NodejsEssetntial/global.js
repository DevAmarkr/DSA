// console.log(process.argv)
// process.stdout.write("hello \n")

// let questions = [
//   "What is your name",
//   "What is your age",
//   "What is your emailId"
// ]

// const answers = [];

// function ask(i = 0) {
//   process.stdout.write(`\n\n\n ${questions[i]}`)
//   process.stdout.write(` > `)
// }

// ask()
// process.stdin.on("data", function (data) {
//   answers.push(process.stdout.write(data.toString().trim()))
//   if (answers.length < questions.length) {
//     ask(answers.length)
//   } else {
//     process.exit()
//   }
// })

// process.on("exit", function () {
//   process.stdout.write("\n")
//   process.stdout.write(
//     `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
//   )
// })


// const path = require("path")
// // console.log(path.basename(__filename))
// const util = require("util")
// const v8 = require("v8")
// const dirUpload = path.join(__dirname, "www", "files", "uploads")
// process.stdout.write("File is created \n")
// // console.log(dirUpload)
// util.log(dirUpload)
// util.log(v8.getHeapStatistics())


// chapter 3

// try {
//   const readline = require('readline')
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
//   let questions = [
//     "What is your name",
//     "What is your age",
//     "What is your emailId"
//   ]

//   function collectAnswers(questions, done) {
//     const answers = []

//     const questionAnswered = (answer) => {
//       answers.push(answer.trim())
//       if (answers.length < questions.length) {
//         rl.question(
//           questions[answers.length],
//           questionAnswered
//         )
//       } else {
//         return done(answers)
//       }
//     }
//     rl.question(questions[0], questionAnswered)
//   }


//   collectAnswers(questions, (answers) => {
//     console.log("Thank you for the Answers")
//     console.log(answers)
//     process.exit()
//   })




//   // rl.question("What is your name \t", (answer) => {
//   //   console.log(`Your answer : ${answer}`)
//   //   process.exit()
//   // })

// } catch (error) {
//   console.log(error)
// }

// Chapter 3.2 : My Module

// let count = 0;
// const inc  = ()=> ++count;
// const dec = ()=> --count;

// const getCount = () => count;

// module.exports =  {
//   anything: true,
//   who: "Amar",
//   count,
//   inc,dec, getCount
// }

// Events (Pub and Subs)'

const events =  require("events");
let emmiter =  new events.EventEmitter();

emmiter.on("customEvent",  (message, user)=>{
   console.log(`${user}: ${message}`)
})

emmiter.emit("cutomeEvent", "Hello World", "Computer")
emmiter.emit("cutomeEvent", "That's pretty cool", "Eve")
 process.stdin.on("data", (data)=>{
  const input =  data.toString().trim();
  if(input === "exit"){
    emmiter.emit("customEvent","Goodbye", "process");
    process.exit();
  }
  emmiter.emit(
    "customEvent",
    data.toString().trim(),
    "terminal"
  )
 })



