// TODO: This is just a placeholder. Do the preprocessing of the reviews here.
let review_tags = ["placeholder", "tags", "placeholder", "tags", "placeholder", "tags", "placeholder", "tags", "placeholder"];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ tags: review_tags },
        function() {
            console.log(`[INFO][background.js] tags for this web page now set to ${review_tags}`);
        });
});