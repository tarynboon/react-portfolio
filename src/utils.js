/* construct absolute path of whatever is there, what this does:
 takes relative path that we passed in, taking base url of website, 
 appending assets path and then passing back URL
 - can easily import dynamic images */
 export const getImageURL = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};