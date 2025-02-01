const p = [
  { name: "ホーム", url: "index.html" },
  { name: "マイクラmanifestジェネレーター", url: "manifestGenerator.html" },
  { name: "チャットルーム", url: "chat.html" },
  {name:"アカウント登録",url:"registration.html"},
  {name:"設定",url:"setting.html"}
];

document.addEventListener("DOMContentLoaded", async () => {
    const mediaQuery = window.matchMedia('(max-device-width: 480px)')
  mediaQuery.addEventListener('change', handleMediaChange)
  handleMediaChange(mediaQuery)

  const div = document.getElementById("l");
  if (!div) return;
  function handleMediaChange(mediaQuery) {
    const div = document.getElementById("l");
    if (mediaQuery.matches) {
      var navListItems = "";
      p.forEach(async (json) => {
        navListItems += `<li><a href="${json.url}">${json.name}</a></li>\n`;
      });
      if (!div) return

      div.innerHTML = `
    <div id="navArea">
      <nav>
        <div class="inner">
          <ul>
            ${navListItems}
          </ul>
        </div>
      </nav>
      <div class="toggle_btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="mask"></div>
    </div>
  `;
      (function ($) {
        const $nav = $('#navArea');
        const $btn = $('.toggle_btn');
        const $mask = $('#mask');
        const open = 'open';

        $btn.on('click', function () {
          if (!$nav.hasClass(open)) {
            $nav.addClass(open);
          } else {
            $nav.removeClass(open);
          }
        });

        $mask.on('click', function () {
          $nav.removeClass(open);
        });
      })(jQuery);
    } else {
      var e = "";
      p.forEach(async (json) => {
        e += `<button onclick="window.location.href = '${json.url}'" type="button" class="nav-button" style="margin-top: -11px;
        margin-left: -10px;
        padding: 10px 20px;
        background-color: #4a90e2;
        color: #ffffff;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;">${json.name}</button>\n`
      })
      div.innerHTML = `
    ${e}`
    }
  }
  
});
