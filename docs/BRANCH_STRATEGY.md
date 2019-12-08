# Agile Branch Strategy

This repository follows the standard branching strategy used by agile teams

## Dev

This is the main branch where features get added to. Each feature will be created, tested, and reviewed in a feature
branch before merging to the dev branch. Furthermore, the dev branch will continuously go through testing to ensure code
reliability and functionality.

## Prod

At the end of each sprint, the dev branch merges into this prod branch. The code in this branch ends up going to the
outside world.

## Release Branches

At the end of each release, a branch is cut from prod. The format for a release branch follows:`release-YYYY.MM.DD`.
