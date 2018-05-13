import * as inquirer from "inquirer";

const questions: inquirer.Questions = [
    {
        type: "list",
        name: "test",
        message: "What's your favorite franchise brand?",
        choices: ["Dominos", "Subway", "Burgerking"],
        filter: val => val.toLowerCase()
    }
]

inquirer.prompt(questions).then(answers => console.log(JSON.stringify(answers, null, ' ')))