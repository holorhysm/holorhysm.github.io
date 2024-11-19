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

/* ======== #Top>div.slideshow : 指定画像群でスライドショー ======== */
(() => {
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
