module.exports = {
  repositoryUrl: "https://github.com/doyyan/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: ["build.zip", "coverage.zip"],
      },
    ],
    "@semantic-release/git",
  ],
  branches: "master",
};
