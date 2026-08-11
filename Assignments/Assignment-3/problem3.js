
const countHashtags = (caption) => {
    // console.log(caption)
    const captionWordArray = caption.split(" ");
    // console.log(captionWordArray)
    let hasTagCount = 0;
    let longestTag = '';
    for (let hasTag of captionWordArray) {
        if (hasTag.startsWith('#')) {
            hasTagCount++;
            if (hasTag.length > longestTag) {
                longestTag = hasTag;
            }
        }

    }
    // console.log(hasTagCount)
    return hasTagCount, longestTag;

}
let captions = "Loving this weather today #sunny #vibes #weekend";

console.log(countHashtags(captions))