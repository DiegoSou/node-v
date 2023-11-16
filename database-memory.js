import { randomUUID } from "node:crypto";

export class DatabaseMemory {
    #videos = new Map();

    list(search) {
        return Array.from(this.#videos.entries())
            .map((videoItem) => {
                const id = videoItem[0];
                const data = videoItem[1];

                return {
                    id,
                    ...data
                };
            })
            .filter(videoItem => {
                if (search) {
                    return videoItem.title.includes(search);
                }

                return true;
            });
    }

    create(video) {
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    }

    updade(id, video) {
        this.#videos.set(id, video);
    }

    delete(id) {
        this.#videos.delete(id);
    }
}
