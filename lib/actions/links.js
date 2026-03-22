"use server"
import { connectDB } from "../db/mongodb"
import links from "../models/links"

export const RedirectUrl = async(shortUrl)=> {
    await connectDB();
    const thatLink = await links.findOne({shortUrl: shortUrl});
    if(!thatLink) return {success: false, error: "Not Found"};
    return {success: true, error: false, data: JSON.parse(JSON.stringify(thatLink))};
}

export const deleteUrl = async(shortUrl)=> {
    await connectDB();
    const thatLink = await links.findOneAndDelete({shortUrl});
    if(!thatLink) return {success: false, deleted: false};

    return {success: true, deleted: true}; 
}