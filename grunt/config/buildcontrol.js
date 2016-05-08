module.exports = {
  options: {
    dir: 'dist',
    commit: true,
    push: true,
    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
  },
  pages: {
    options: {
      remote: 'https://github.com/eduardsi/eduardsi.github.io.git',
      branch: 'master',
      login: 'eduardsi',
      token: '${GH_TOKEN}'
    }
  }
}
