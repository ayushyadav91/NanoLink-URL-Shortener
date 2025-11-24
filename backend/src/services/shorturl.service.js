    import { ShortUrl } from "../models/shorturl.model.js";
    import { generateNanoId } from "../utils/helper-fn.js";
    import { ApiError } from "../utils/api-error.js";
    import { asyncHandler } from "../utils/async-handler.js";


export const createShortUrlService = asyncHandler(async (originalUrl) => {
    const short_url = generateNanoId(6);
    const url = await ShortUrl.findOne({full_url:originalUrl});
    if(url){
        res.status(400).json({message:"URL already exists"});
    }
           
    const shortUrl = await ShortUrl.create({
              full_url:originalUrl,
                short_url:short_url,
            });
            shortUrl.save();
            return shortUrl;
});

// export const createShortUrlwithUserService = async (originalUrl,userId) => {
//     const short_url = generateNanoId(6);
    
//             const shortUrl = await ShortUrl.create({
//                 full_url:originalUrl,
//                 short_url:short_url,
//                 user:userId
//             });
//             shortUrl.save();
//             return shortUrl;
// };
export const getShortUrlService = async (shortId) => {
    const url = await ShortUrl.findOneAndUpdate({short_url:shortId}, {$inc:{click:1}});
    return url;

};


    