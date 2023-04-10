try {
    // throw( new Error())

const core = require("@actions/core");
const github = require("@actions/github");

const name = core.getInput('who-to-greet')
core.setOutput("time", time.toTimeString())

console.log(`Hello ${name}`);

console.log(JSON.stringify(github, null, '\t'))
} catch (error) {
    core.setFailed(error.message)
    
}

