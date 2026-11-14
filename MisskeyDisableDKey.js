// ==UserScript==
// @name        Misskey Disable D key
// @version     1.0.0
// @description Misskeyで D キーによるライト/ダークテーマ切り替えを無効化
// @match       https://buicha.social/*
// @run-at      document-start
// @grant       none
// ==/UserScript==
(() => {
    'use strict';

    window.addEventListener('keydown', (event) => {
        // 小文字の d のみ対象
        if (event.key !== 'd') return;

        // 修飾キーが押されている場合は対象外
        if (
            event.shiftKey ||
            event.ctrlKey ||
            event.altKey ||
            event.metaKey
        ) return;

        // 入力欄では通常のキー入力を許可
        const el = document.activeElement;

        if (
            el &&
            (
                el.tagName === 'INPUT' ||
                el.tagName === 'TEXTAREA' ||
                el.isContentEditable
            )
        ) return;

        // サイト側のショートカットを無効化
        event.stopImmediatePropagation();
        event.preventDefault();

    }, { capture: true });
})();
