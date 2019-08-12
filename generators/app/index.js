const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        default: this.appname,
      },
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      this.answers,
      {},
      { globOptions: { dot: true } }
    );
  }

  installingDependencies() {
    this.yarnInstall(['mithril', 'tailwindcss']);
  }

  installingDevDependencies() {
    this.yarnInstall(
      [
        '@types/mithril',
        'clean-webpack-plugin',
        'css-loader',
        'cssnano',
        'eslint',
        'eslint-config-prettier',
        'eslint-plugin-prettier',
        'html-webpack-plugin',
        'postcss-import',
        'postcss-loader',
        'postcss-preset-env',
        'prettier',
        'standard-version',
        'style-loader',
        'ts-loader',
        'tslint',
        'typescript',
        'webpack',
        'webpack-cli',
        'webpack-dev-server',
        'webpack-merge',
      ],
      { dev: true }
    );
  }
};
