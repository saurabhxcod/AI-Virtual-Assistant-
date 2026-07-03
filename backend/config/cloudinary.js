import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

    try {
        if (!filePath) return null;
        const uploadResult = await cloudinary.uploader.upload(filePath);
        try {
            fs.unlinkSync(filePath)
        } catch (err) {
            console.log("Unlink temp file error: ", err);
        }
        return uploadResult.secure_url
    } catch (error) {
        console.log("Cloudinary upload error: ", error);
        try {
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
        } catch (err) {
            console.log("Unlink temp file error: ", err);
        }
        throw error;
    }
}

export default uploadOnCloudinary