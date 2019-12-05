# What is Yarn

Yarn is a package manager for your code.
It allows you to use and share code with other developers from around the world.
Yarn does this quickly, securely, and reliably so you don’t ever have to worry. [1]

By running CLI commands, Yarn manages dependencies and their versions.
Additionally, Yarn can configure the installation of these dependencies.
To see more information about managing dependencies, click [here](https://yarnpkg.com/en/docs/managing-dependencies).
To view more details about installation options, click [here](https://yarnpkg.com/en/docs/installing-dependencies).

# Installation and Initialization

Run the following command to install Yarn onto your computer: [2]

`brew install yarn`

Afterword, run the following command to incorporate Yarn into a project: [3]

`yarn init`

# Using CLI Commands

Yarn is executed solely through its CLI commands.
As described on its website, Yarn provides a rich set of command-line commands to help with various aspects including installation, administration, publishing, etc.

| Common Commands    | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `yarn add`         | adds a package to use in your current package                  |
| `yarn audit`       | perform a vulnerability audit against the installed packages   |
| `yarn autoclean`   | cleans and removes unnecessary files from package dependencies |
| `yarn install`     | installs all the dependencies defined in a package.json file   |
| `yarn licenses`    | list licenses for installed packages                           |
| `yarn outdated`    | checks for outdated package dependencies                       |
| `yarn remove`      | removes an unused package from your current package            |
| `yarn run`         | runs a defined package script                                  |
| `yarn self-update` | updates Yarn to the latest version                             |
| `yarn upgrade`     | upgrades packages to their latest version                      |

To see the full list of Yarn commands, click [here](https://yarnpkg.com/en/docs/cli/).
Some Yarn commands include parameters and secondary commands.
Review the api whenever using Yarn commands.

[1]: https://yarnpkg.com/en/docs/getting-started
[2]: https://yarnpkg.com/en/docs/install#mac-stable
[3]: https://yarnpkg.com/en/docs/usage
