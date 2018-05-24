# generator-jhipster-uaa-security-authority

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> JHipster module, A JHipster module that create security authority for sync between uaa and microservices

# Introduction

This is a [JHipster](http://jhipster.github.io/) module, that is meant to be used in a JHipster application.

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) module, we expect you have JHipster and its related tools already installed:

*   [Installing JHipster](https://jhipster.github.io/installation.html)
*   [Installing JHipster Feign Client](https://github.com/ChihoSin/generator-jhipster-feign-client)

# Installation

## With Yarn

To install this module:

```bash
yarn global add generator-jhipster-uaa-security-authority
```

To update this module:

```bash
yarn global upgrade generator-jhipster-uaa-security-authority
```

## With NPM

To install this module:

```bash
npm install -g generator-jhipster-uaa-security-authority
```

To update this module:

```bash
npm update -g generator-jhipster-uaa-security-authority
```

# Usage

```bash
# Create security authority tools for UAA service
cd <your uaa application project root folder>
yo jhipster-uaa-security-authority

# Create security authority tools for microservice
cd <your microservice application project root folder>
yo jhipster-feign-client --uaa-client --uaa-base-name=<UaaBaseName>
yo jhipster-uaa-security-authority
```

# License

MIT © [Chiho Sin](https://github.com/ChihoSin)

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-uaa-security-authority.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-uaa-security-authority
[travis-image]: https://travis-ci.org/ChihoSin/generator-jhipster-uaa-security-authority.svg?branch=master
[travis-url]: https://travis-ci.org/ChihoSin/generator-jhipster-uaa-security-authority
[daviddm-image]: https://david-dm.org/chihosin/generator-jhipster-uaa-security-authority.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/chihosin/generator-jhipster-uaa-security-authority
