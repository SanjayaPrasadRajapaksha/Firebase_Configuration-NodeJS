import * as aboutUsRepository from "../Repositories/aboutUs.repo.js";
import * as firebaseService from "../Services/firebase.service.js";

export const createAboutUs = async (title1, title2, description, image) => {
    try {
        let dataToCreate = { title1, title2, description };

        if (image) {
            const image_url = await firebaseService.uploadFileToStorage(image, "AboutUsImage");
            if (!image_url.status) {
                return {
                    status: image_url.status,
                    message: image_url.message,
                    data: image_url.data,
                };
            }
            dataToCreate.image_url = image_url.data;
        }

        const result = await aboutUsRepository.createAboutUs(dataToCreate);
        return {
            status: true,
            message: "About us Created Successfully",
            data: result,
        };
    } catch (error) {
        return {
            status: false,
            message: error,
            data: "Error regarding about us creation",
        };
    }
};

export const getAllAboutUs = async () => {
    try {
    const result =  await aboutUsRepository.getAllAboutUs();
    return {
        status: true,
        message: "About us fetched successfully",
        data: result,
    };
    } catch (error) {
    return {
        status: false,
        message: error,
        data: "error regarding fetching about us",
    };
    }
};

export const getAboutUsById = async (id) => {
    try {
    const result = await aboutUsRepository.getAboutUsById(id);
    if (!result) {
        return {
        status: false,
        message: "about us not found",
        data: result,
        };
    }
    return {
        status: true,
        message: "about us fetched successfully",
        data: result,
    };
    } catch (error) {
    return {
        status: false,
        message: error,
        data: "error regarding fetching about us",
    };
    }
};

export const updateAboutUs = async (id,title1,title2, description, image) => {
    try {
        let image_url = null;
        let dataToUpdate = { title1,title2, description };

        if (image) {
            image_url = await firebaseService.uploadFileToStorage(image, "AboutUsImage");
            if (!image_url.status) {
                return {
                    status: image_url.status,
                    message: image_url.message,
                    data: image_url.data,
                };
            }
            dataToUpdate.image_url = image_url.data;
        }

        const result = await aboutUsRepository.updateAboutUs(id, dataToUpdate);

        return {
            status: true,
            message: "About us updated successfully",
            data: result,
        };
    } catch (error) {
        return {
            status: false,
            message: error,
            data: "error regarding about us update service",
        };
    }
};

export const deleteAboutUs = async (id) => {
    try {

        const aboutUs = await getAboutUsById(id); 
        const imageUrl = aboutUs.data?.imageUrl;
        if (imageUrl) {
            const deleteImage = await firebaseService.deleteFileFromStorage(imageUrl);
            if (!deleteImage.status) {
                return {
                    status: deleteImage.status,
                    message: deleteImage.message,
                    data: deleteImage.data,
                };
            }
        }
        const result = await aboutUsRepository.deleteAboutUs(id);
        if (result > 0) {
            return {
                status: true,
                message:  "About us deleted successfully",
                data: result,
            }
        } else {
            return {
                status: false,
                message: "about us delete failed",
            }
        }
    } catch (error) {
        return {
            status: false,
            message: error,
            data: "error regarding about us deletion",
        };
    }
};