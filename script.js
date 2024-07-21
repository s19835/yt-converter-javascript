#!/usr/bin/env node
import { Command } from "commander";
import { download } from "./download-video.js";

const program = new Command();

program
    .name('yt-converter')
    .description('CLI to some JavaScript')
    .version('0.1.0');

program
    .command('download <videoUrl>')
    .description('Download a video from YouTube')
    .option('-f, --folder <folderName>', 'Output folder name', 'videos')
    .option('-n, --name <fileName>', 'Output file name', 'video')
    .action(async (videoUrl, options) => {
        const { folder: folderName, name: fileName } = options;
        await download(videoUrl, folderName, fileName);
    });

program.parse();