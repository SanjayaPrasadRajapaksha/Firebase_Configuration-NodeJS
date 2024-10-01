import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import firebaseApp from "../Configs/firebase.config.js";
const storage = getStorage(firebaseApp);

export const uploadFileToStorage = async (file, folder) => {
    try {
        const dateTime = new Date().getTime();
        const storageRef = ref(storage, `${folder}/${file.originalname + " " + dateTime}`
        );
        await uploadBytes(storageRef, file.buffer);
        const url = await getDownloadURL(storageRef);
        return {
            status: true,
            code: 200,
            message: `${folder.slice(0, -1)} uploaded successfully`,
            data: url,
        };
    } catch (error) {
        console.log(error);
        return {
            status: false,
            code: 401,
            message: error,
            data: "error regarding downloadUrl",
        };
    }
};

export const deleteFileFromStorage = async (url) => {
    try {
        const storageRef = ref(storage, url);
        await deleteObject(storageRef);
        return {
            status: true,
            code: 200,
            message: "File deleted successfully",
        };
    } catch (error) {
        return {
            status: false,
            code: 401,
            message: error,
        };
    }
}