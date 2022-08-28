#!/usr/bin/env node
import { Command } from "commander";
import { readFileSync } from "fs";
import { build } from "../src";
const packageJsonString = readFileSync("package.json", "utf-8");
const packageJson = JSON.parse(packageJsonString);

const program = new Command();

program
  .version(packageJson.version, "-v, --version")
  .option("-i, --input <file>", "Entry file");

program.parse();

build(program.opts());
