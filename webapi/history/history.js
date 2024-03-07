// The history.pushState() method allows you to add an entry to the web browser’s session history stack.

// Here’s the syntax of the pushState() method:

// history.pushState(state, title, [,url])

const tabs = document.querySelector(".tabs");
const content = document.querySelector(".tabs > .content");

// store the relationship between hash & tab id
const hashes = new Map([
    ["#react", "tab1"],
    ["#vue", "tab2"],
    ["#angular", "tab3"],
]);

// store the relationship between tab id and contents
const data = new Map([
    [
        "tab1",
        {
            url: "index.html#react",
            content:
                "React is a JavaScript library for building user interfaces.",
        },
    ],
    [
        "tab2",
        {
            url: "index.html#vue",
            content: "Vue is the Progressive JavaScript Framework.",
        },
    ],
    [
        "tab3",
        {
            url: "index.html#angular",
            content:
                "Angular is a platform for building mobile and desktop web applications.",
        },
    ],
]);

tabs.addEventListener("click", function (event) {
    if (!event.target.id) return;
    update(event.target.id);
});

const update = (tabId) => {
    // remove the active class of the previously selected tab
    const currentTab = tabs.querySelector(".active");

    if (currentTab.id != tabId) {
        currentTab.classList.remove("active");
    }
    // add active class to the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");

    const entry = data.get(tabId);

    if (entry) {
        // update the URL
        history.pushState(null, "", entry.url);
        // change the content
        content.innerHTML = entry.content;
    }
};

(() => {
    // get tab id from the hash
    const tabId = hashes.get(window.location.hash);
    // update the tab
    if (tabId) update(tabId);
})();