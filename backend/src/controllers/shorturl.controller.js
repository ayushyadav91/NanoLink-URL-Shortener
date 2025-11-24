import { ShortUrl } from "../models/shorturl.model.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import {ApiResponse} from "../utils/api-response.js";
import { createShortUrlService , getShortUrlService } from "../services/shorturl.service.js";




export const createShortUrl = asyncHandler( async (req, res) => {
    const {full_url} = req.body;
    if(!full_url){
        throw new ApiError(400, "Full URL is required");
    }

        // res.status(201).json(shortUrl);
        const shortUrl = await createShortUrlService(full_url);
        res.json(new ApiResponse(
            201,
            shortUrl,
           "Short URL created successfully"
        ));
    }
);

export const redirectOnShortUrl = asyncHandler(async (req, res) => {
    const {shortId} = req.params;
   const url = await  getShortUrlService(shortId);  
    if(url){
        res.redirect(url.full_url);
    }else{
        res.status(404).json({message:"URL not found"});
    }
});



