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
