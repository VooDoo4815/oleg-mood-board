"use server";
const fs = require("fs");

const getFiles = new Promise<string[]>((resolve, reject) => {
    fs.readdir("./public/audio", (err: NodeJS.ErrnoException, files: string[]) => {
        if (err) {
            reject(err);
        }

        resolve(files);
    });
});

export const olegFiles = async () => {
    return await getFiles;
};
