# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Accessibility](#accessibility)
  - [Config](#config)
  - [Core](#core)
  - [Depend](#depend)
  - [Docs](#docs)
  - [Feature](#feature)
  - [Language](#language)
  - [Legal](#legal)
  - [Platform](#platform)
  - [QA](#qa)
  - [Research](#research)
  - [Security](#security)
  - [Validate](#validate)

---

## Accessibility

Responsible for testing accessibility flaws and meeting accessibility requirements.

Owns:

- accessibility/\*
- tools/accessibility/\*

## Config

Responsible for configurations for the project.

Owns:

- nx.json
- tsconfig
- tslint
- prettier
- .editorconfig

## Core

Responsible for the build process, environment setup, and controlling git

Owns:

- gitignore
- angular.json
- tools/build/\*
- tools/env/\*
- tools/git/\*

## Depend

Responsible for the project dependencies

Owns:

- yarn.lock
- package\*.json
- node_modules/
- tools/packages/\*

## Docs

Responsible for the all documentation for the project.

Owns:

- README
- docs/\*
- Each lib documentation
- Each app documentation
- Each testing documentation

## Feature

Responsible for all libs in the project.

Owns:

- libs/\*

## Language

Responsible for supporting multiple language options.

Owns:

- language/\*
- tools/language/\*

## Legal

Handles any and all of the legal material for this project.

Owns:

- legal/\*
- tools/legal/\*

## Platform

Responsible for all apps in the repo

Owns:

- apps/\*

## QA

Responsible for all testing in the repo

Owns:

- \*.spec.ts
- tests/\*
- any system tests
- tools/tests/\*

## Research

Responsible for all research and trial code

Owns:

- research/\*

## Security

Responsible for security throughout the application

Owns:

- security/\*
- tools/security/\*

## Validate

Responsible for generating reports about tests, analytics, logs, or any data collection system

Owns:

- logs/\*
- reports/\*
- tools/validate/\*
