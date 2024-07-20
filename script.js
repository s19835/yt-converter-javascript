#!/usr/bin/env node
import { Command } from "commander";

//create new action handler for commands
const program = new Command();

program
    .name('string-util')
    .description('CLI to some JavaScript string utilities')
    .version('0.8.0');

program
    .command('split')
    .description('Split a string into substrings and display as an array')
    .argument('<string>', 'string to split')
    .option('--first', 'display the first substring')
    .option('-s, --separator <char>', 'separator charactor', ',')
    .action((str, options) => {
        const limit = options.first ? 1 : undefined;
        str ? console.log(str.split(options.separator, limit)) : console.log('Provide valid input string');
    });

program.parse();