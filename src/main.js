// src/main.js
import "@/scss/style.scss"; // 自分のメインSCSSのパス

// DOMContentLoaded は HTML の解析が終わった瞬間に実行されます
document.addEventListener("DOMContentLoaded", () => {
  console.log("JSが動いています！"); // デバッグ用：これが出るか確認
  document.body.classList.add("is-loaded");
});
