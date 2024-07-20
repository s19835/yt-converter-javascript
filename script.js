#!/usr/bin/env node
import { program } from "commander";

console.log("Hello World");

program
    .option('--first')
    .option('-s --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
program.args[0] ? console.log(program.args[0].split(options.separator, limit)): console.log('provide a valid input');