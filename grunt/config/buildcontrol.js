module.exports = {
  options: {
    dir: 'dist',
    commit: true,
    push: true,
    connectCommits: false,
    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
  },
  pages: {
    options: {
      remote: 'https://eduardsi:${GH_TOKEN}@github.com/eduardsi/eduardsi.github.io.git',
      branch: 'master'
    }
  }
}
