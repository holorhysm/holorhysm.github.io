/** ================================================================================================
 * テンプレート
================================================================================================= */

/**
 * ページのロード完了を待つ
 */
await Promise.race([
    // ページのロード完了を待つ
    new Promise((resolve) => { window.addEventListener("load", resolve, { once: true }); }),
    // 3秒経過したら強制的にresolve
    new Promise((resolve) => { setTimeout(resolve, 3000); }),
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
