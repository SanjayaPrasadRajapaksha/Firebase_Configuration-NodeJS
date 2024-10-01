import * as aboutUsService from "../Services/aboutUs.service.js";

export const createAboutUs = async (req, res) => {
    try {
        const { title1,title2, description } = req.body;
        const image = req.file;
        const result = await aboutUsService.createAboutUs(title1,title2, description,image);
        
        if (!result.status) {
            res.status(400).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
            } else {
            res.status(201).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
            }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding aboutUs controller creation",
        });
    }
};

export const getAllAboutUs = async (req, res) => {
    try {
    const result = await aboutUsService.getAllAboutUs ();
    if (!result.status) {
        res.status(404).json({
        status: result.status,
        message: result.message,
        data: result,
        });
    } else {
        res.status(200).json({
        //status: result.status,
        //message: result.message,
        AboutUsData: result,
        });
    }
    } catch (error) {
    res.status(400).json({
        status: false,
        message: error,
        data: "error regarding fetching aboutUs",
    });
    }
};

export const getAboutUsById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await aboutUsService.getAboutUsById(id);
        if (!result.status) {
            res.status(404).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        } else {
            res.status(200).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding fetching aboutUs",
        });
    }
};

export const updateAboutUs = async (req, res) => {
    try {
        const id = req.params.id;
        const { title1,title2, description} = req.body;
        const image = req.file;
        const result = await aboutUsService.updateAboutUs(id,title1,title2, description,image);
        if (!result.status) {
            res.status(400).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        } else {
            res.status(200).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding updating about us",
        });
    }
};

export const deleteAboutUs = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await aboutUsService.deleteAboutUs(id);
        if (!result.status) {
            res.status(400).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        } else {
            res.status(200).json({
                status: result.status,
                message: result.message,
                data: result.data,
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error,
            data: "error regarding deleting about us",
        });
    }
};