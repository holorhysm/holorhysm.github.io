/** ================================================================================================
 * テンプレート
================================================================================================= */

/**
 * ページのロード完了を待つ
 */
await Promise.race([
    // ページのロード完了を待つ
    new Promise((resolve) => { window.addEventListener("load", resolve, { once: true }); }),
    // document.readyStateがcompleteになるのを待つ(1秒ごとに確認)
    new Promise((resolve) => {
        const check = () => { if (document.readyState === "complete") { resolve(); } else { setTimeout(check, 1000); } };
        check();
    }),
]);

/**
 * document.querySelectorのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element}
 */
const $ = selector => document.querySelector(selector);

/**
 * document.querySelectorAllのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element[]}
 */
const $$ = selector => Array.from(document.querySelectorAll(selector));

/** ================================================================================================
 * 以下、本体
================================================================================================= */

/* ======== header button#translate : 翻訳 ======== */
(async () => {
    /** @type {{supports: string[], langName: Object<string, string>, queries: Object<string, string>[]}} */
    const dict = await (await fetch("/assets/data/languages/dict.json")).json();
    let index = -1;
    const update = () => {
        index = (index + 1) % dict.supports.length;
        const lang = dict.supports[index];
        dict.queries.forEach(query => {
            $(query.selector).animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 })
            $(query.selector).textContent = query[lang] ?? query.ja;
        });
        $("header button#translate").setAttribute("data-pop", `Switch to ${dict.langName[dict.supports[(index + 1) % dict.supports.length]]}`);
    }
    $("header button#translate").addEventListener("click", update);
    update();
})();

/* ======== #Top>div.slideshow : 指定画像群でスライドショー ======== */
(async () => {
    const interval = 5000;
    const fadeDuration = 500;
    let currentIndex = -1;
    const slideshowImagesPath = [
        "/assets/images/screenshots/title.png",
        "/assets/images/screenshots/session.png",
    ];
    const slideshowElement = $("#Top>div.slideshow");
    const update = () => {
        const nextIndex = (currentIndex + 1) % slideshowImagesPath.length;
        const nextImagePath = slideshowImagesPath[nextIndex];
        const nextImageElement = document.createElement("img");
        nextImageElement.src = nextImagePath;
        nextImageElement.style.opacity = 0;
        slideshowElement.appendChild(nextImageElement);
        nextImageElement.animate([{ opacity: 0 }, { opacity: 1, offset: fadeDuration / (interval + fadeDuration) }, { opacity: 1, offset: 1 }], { duration: interval + fadeDuration });
        setTimeout(() => { slideshowElement.removeChild(nextImageElement); }, interval + fadeDuration);
        currentIndex = nextIndex;
        setTimeout(update, interval);
    };
    update();
})();

/* ======== #News>div.news-list : ニュース一覧を表示 ======== */
(async () => {
    /** @type {{date: string, type: string, desc: string, path: string}[]} - ニュース部分に出す文面一覧 */
    const newsData = await (await fetch("/assets/data/news/list.json")).json();
    const newsListElement = $("#News>div.news-list");
    const getNewsItemElement = (newsDatum) => {
        // 外側 div.news-item
        const newsItemElement = document.createElement("div");
        newsItemElement.classList.add("news-item");
        // 日付 p.date
        const dateElement = document.createElement("p");
        dateElement.classList.add("date");
        dateElement.textContent = newsDatum.date;
        newsItemElement.appendChild(dateElement);
        // 種類 p.type
        const typeElement = document.createElement("p");
        typeElement.classList.add("type");
        typeElement.textContent = newsDatum.type;
        newsItemElement.appendChild(typeElement);
        // 内容 p.desc
        const descElement = document.createElement("p");
        descElement.classList.add("desc");
        descElement.textContent = newsDatum.desc;
        newsItemElement.appendChild(descElement);
        // リンクボタン button
        const buttonElement = document.createElement("button");
        // リンク a
        const linkElement = document.createElement("a");
        linkElement.href = newsDatum.path;
        // リンク表示 i.fa-solid.fa-arrow-up-right-from-square
        const iconElement = document.createElement("i");
        iconElement.classList.add("fa-solid", "fa-arrow-up-right-from-square");
        linkElement.appendChild(iconElement);
        buttonElement.appendChild(linkElement);
        newsItemElement.appendChild(buttonElement);
        // return
        return newsItemElement;
    };
    // ニュース一覧は日付(新しい)順にソート
    newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    // 挿入
    newsData.forEach(newsDatum => {
        newsListElement.appendChild(getNewsItemElement(newsDatum));
    });
})();

/* ======== #Update>div.list : リリースノートを並べる ======== */
(async () => {
    /** @type {string[]} - リリースノートがあるバージョン一覧 */
    const versionList = await (await fetch("/assets/data/update/list.json")).json();
    const marked = await import("https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js");
    versionList.reverse();
    const versionElementList = await Promise.all(versionList.map(async version => {
        const markdown = await (await fetch(`/assets/data/update/${version}.md`)).text();
        const articleElement = document.createElement("article");
        articleElement.setAttribute("id", `Update_v${version}`);
        articleElement.innerHTML = marked.parse(markdown, { "breaks": true });
        return articleElement;
    }));
    $("#Update>div.list").append(...versionElementList);
})();


/* ========  :  ======== */
(async () => { })();
