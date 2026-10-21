const arrow =
  '<svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M7 3.5 L14.2 10 L7 16.5" fill="none" stroke="#1a1a1a" stroke-width="3.091" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 3.5 L14.2 10 L7 16.5" fill="none" stroke="#fff" stroke-width="1.455" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function bindScrollHint(gallery: HTMLElement) {
  if (gallery.dataset.hintBound === "true") return;
  gallery.dataset.hintBound = "true";

  let wrap = gallery.parentElement;
  if (!wrap?.classList.contains("gallery-wrap")) {
    const created = document.createElement("div");
    created.className = "gallery-wrap";
    gallery.parentNode?.insertBefore(created, gallery);
    created.appendChild(gallery);
    wrap = created;
  }

  let hint = wrap.querySelector<HTMLElement>(".gallery-hint");
  if (!hint) {
    hint = document.createElement("span");
    hint.className = "gallery-hint";
    hint.setAttribute("aria-hidden", "true");
    hint.innerHTML = arrow;
    wrap.appendChild(hint);
  }

  const update = () => {
    const remaining = gallery.scrollWidth - gallery.clientWidth - gallery.scrollLeft;
    hint.classList.toggle("is-visible", remaining > 2);
  };

  gallery.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  gallery.querySelectorAll("img").forEach((img) => {
    if (!img.complete) img.addEventListener("load", update, { once: true });
  });
  update();
}

function bindLightbox() {
  const lightbox = document.querySelector<HTMLElement>(".lightbox");
  if (!lightbox || lightbox.dataset.bound === "true") return;

  const image = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector<HTMLButtonElement>(".lightbox-close");
  if (!image || !closeButton) return;

  lightbox.dataset.bound = "true";

  const items = Array.from(document.querySelectorAll<HTMLElement>(".gallery-item")).filter(
    (item) => item.tagName === "BUTTON" && item.querySelector("img"),
  );
  let index = 0;
  let lastTrigger: HTMLElement | null = null;

  const show = (nextIndex: number) => {
    if (!items.length) return;
    index = (nextIndex + items.length) % items.length;
    const source = items[index].querySelector("img");
    if (!source) return;
    lastTrigger = items[index];
    image.src = source.getAttribute("data-full") || source.currentSrc || source.src;
    image.alt = source.alt;
  };

  const open = (trigger: HTMLElement) => {
    const start = items.indexOf(trigger);
    show(start < 0 ? 0 : start);
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  };

  const close = () => {
    lightbox.hidden = true;
    image.removeAttribute("src");
    image.alt = "";
    document.body.classList.remove("lightbox-open");
    lastTrigger?.focus();
  };

  items.forEach((button) => {
    button.addEventListener("click", () => open(button));
  });

  closeButton.addEventListener("click", close);

  let swipeStartX = 0;
  let swipeStartY = 0;
  let trackingSwipe = false;
  let ignoreClick = false;

  lightbox.addEventListener(
    "touchstart",
    (event) => {
      if (lightbox.hidden || event.touches.length !== 1) return;
      if ((event.target as Element | null)?.closest("button")) return;
      trackingSwipe = true;
      swipeStartX = event.touches[0].clientX;
      swipeStartY = event.touches[0].clientY;
    },
    { passive: true },
  );

  lightbox.addEventListener(
    "touchend",
    (event) => {
      if (!trackingSwipe) return;
      trackingSwipe = false;
      const touch = event.changedTouches[0];
      if (!touch) return;
      const deltaX = touch.clientX - swipeStartX;
      const deltaY = touch.clientY - swipeStartY;
      if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
      ignoreClick = true;
      show(deltaX < 0 ? index + 1 : index - 1);
    },
    { passive: true },
  );

  lightbox.addEventListener("click", (event) => {
    if (ignoreClick) {
      ignoreClick = false;
      return;
    }
    if (event.target === lightbox) close();
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1);
    }
  });
}

export function initGallery() {
  bindLightbox();
  document.querySelectorAll<HTMLElement>(".gallery").forEach(bindScrollHint);
}
