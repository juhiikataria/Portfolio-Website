export const getImageUrl =(path) => {
    return new URL(`/assets/${path}`,import.meta.url).href;
    console.log(URL(`/assets/${path}`,import.meta.url).href)
};