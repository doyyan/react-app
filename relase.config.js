module.exports = {
  repositoryUrl: "https://github.com/doyyan/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/git",
  ],
  branches: ["master"],
};
