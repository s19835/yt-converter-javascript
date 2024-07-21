import path from "path";
import ytdl from "ytdl-core";

export async function download(videoUrl, folderName, fileName) {
    const filePath = path.join(folderName, `${fileName}.mp4`);
    console.log(filePath);
}