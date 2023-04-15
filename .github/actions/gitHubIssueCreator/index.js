const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");

    const assignees = core.getInput("assignees");

    const oktokit = new github.Github(token);

    const response = await oktokit.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split("\n") : undefined,
    });

    core.setOutput("issue", response);
  } catch (Error) {
    core.setFailed(error.message);
  }
}

run();
