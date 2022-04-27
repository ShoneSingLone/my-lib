#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const package = require("../package.json");
const { ActionDeploy } = require("./actions/deploy");

const programAppend = (action) => {
  action.appendTo(program);
};

program.version(package.version).description(package.description);
programAppend(ActionDeploy);
program.parse();
