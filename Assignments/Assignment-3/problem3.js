
const countHashtags = (caption) => {
    if (typeof caption !== 'string') {
        return "Invalid";
    }
    const captionWords = caption.split(" ");

    let hashtagCount = 0;
    let longestTag = "";

    for (const hasTag of captionWords) {
        if (hasTag.startsWith("#")) {
            hashtagCount++;

            const tagWithOutHas = hasTag.slice(1);
            if (tagWithOutHas.length > longestTag.length) {
                longestTag = tagWithOutHas;
            }
        }

    }

    return { hashtagCount, longestTag };

}
let captions = "Loving this weather today #sunny #vibes #weekend #mahabubulalam";

console.log(countHashtags(captions))
console.log(countHashtags("No hashtags here"))
console.log(countHashtags(["#fun"]))
console.log(countHashtags())