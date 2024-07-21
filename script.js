#!/usr/bin/env node
import { Command } from "commander";
import { download } from "./download-video.js";

download('http://hi/hello', 'video', 'file');