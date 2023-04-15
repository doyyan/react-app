const core = require("@actions/core");
const github = require("@actions/github");

try {
  //   throw( new Error(" Deliberate error was thrown! "))

  core.debug(" A debug message");
  core.warning(" A warning ");
  core.error(" An error message ");

  const name = core.getInput("who-to-greet");
  core.setSecret(name);
  console.log(`Hello ${name}`);

  core.warning(" A warning " + name);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup();
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();
} catch (error) {
  core.setFailed(error.message);
}
