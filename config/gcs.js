import { Storage } from "@google-cloud/storage";

const bucketName = "luminacine-bucket";

const storage = new Storage();
const bucket = storage.bucket(bucketName);

export { bucket };
