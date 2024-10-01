import {AboutUs}  from "../Models/aboutUs.model.js";

export const createAboutUs = async (values) => {
    try {
        const result = await AboutUs.create({
           title1: values.title1,
           title2: values.title2,
           description: values.description,
            imageURL: values.image_url,
        });
        return result;
    } catch (error) {
        throw error;
    }
};

export const getAllAboutUs = async () => {
    try {
        const result = await AboutUs.findAll();
        return result;
    } catch (error) {
        throw error;
    }
};

export const getAboutUsById = async (id) => {
    try {
    const result = await AboutUs.findByPk(id);
    return result;
    } catch (error) {
    throw error;
    }
};

export const updateAboutUs = async (id, values) => {
    try {
        const result = await AboutUs.update({
            title1: values.title1,
            title2: values.title2,
            description: values.description,
            imageURL: values.image_url,
        }, {
            where: {
                id: id,
            },
        });
        return result;
    } catch (error) {
        throw error;
    }
};

export const deleteAboutUs = async (id) => {
    try {
        const result = await AboutUs.destroy({
            where: {
                id: id,
            },
        });
        return result;
    } catch (error) {
        throw error;
    }
};

