# 📜 CallPlay Live Chat Auto-Scroll
Simple JavaScript snippet to enable auto-scrolling for new messages in CallPlay Live Chat on Chrome Console.

This is a lightweight JavaScript snippet that auto-scrolls the live chat (`#msg-area`) on [CallPlay Live](https://h5.callplay.in.th/) whenever new messages appear — as long as the user is already at the bottom.

## 📌 How to Use

1. Open **Google Chrome** browser.
2. Go to: [https://h5.callplay.in.th/](https://h5.callplay.in.th/)
3. Join a live room.
4. Press `F12` to open **Developer Tools**, and go to the **Console** tab.
5. If pasting doesn't work, first type:
   ```js
   allow pasting
and press Enter.

6. Then, copy and paste the following script into the console:
```js
   (function autoScrollMsgAreaWhenNewContent() {
  const container = document.getElementById('msg-area');

  if (!container) {
    console.warn('❌ ไม่พบ element ที่มี id="msg-area"');
    return;
  }

  let isUserAtBottom = true;

  function checkIfAtBottom() {
    const threshold = 10;
    const atBottom = container.scrollHeight - container.scrollTop - container.clientHeight < threshold;
    isUserAtBottom = atBottom;
  }

  const observer = new MutationObserver(() => {
    if (isUserAtBottom) {
      container.scrollTop = container.scrollHeight;
    }
  });

  observer.observe(container, {
    childList: true,
    subtree: true,
  });

  container.addEventListener('scroll', checkIfAtBottom);

  console.log('✅ ระบบ auto-scroll พร้อมทำงานเมื่อมี content ใหม่ใน #msg-area');
})();
