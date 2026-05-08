// src/main.js
import "@/scss/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  // 1. ページ読み込み完了時の処理（背景表示用）
  document.body.classList.add("is-loaded");

  // 2. フェードインアニメーションの監視設定
  const fadeElements = document.querySelectorAll(".js-fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // 一度表示されたら監視を終了
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // 20%見えたら実行
    },
  );

  fadeElements.forEach((el) => observer.observe(el));
});
