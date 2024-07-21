import path from "path";
import fs from 'fs';
import ytdl from "ytdl-core";
import ora from "ora";

export async function download(videoUrl, folderName, fileName) {
    const filePath = path.join(folderName, `${fileName}.mp4`);
    
    if (fs.existsSync(filePath)) throw new Error('File already exsist');

    if (!fs.existsSync(folderName)) fs.mkdir(folderName);
    
    const videoStream = ytdl(videoUrl, { quality: 'highest'});
    const writeStream = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
        videoStream.pipe(writeStream);

        writeStream.on('finish', () => {
            console.log('video download to ', filePath);
            resolve();
        });

        writeStream.on('error', () => {
            console.error('Error writing video to disk');
            reject();
        });
    });
}