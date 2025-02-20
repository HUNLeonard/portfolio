/*
 * Inside the container, wich is a ref, there hase to be
 * !!AN IMG WITH A 'LOADING-IMAGE' CLASS!!,
 * because if not, this will not "wait load" the 'big img'
 * See in "Hero.tsx"
 */
export const useLoadingImage = (loadingContainer: HTMLElement | null) => {
  if (loadingContainer === null) return;
  const loadingImages: HTMLImageElement[] = Array.from(
    loadingContainer.querySelectorAll(".loading-image"),
  );

  const loaded = (img: HTMLImageElement) => {
    img.classList.remove("loading");
    img.removeEventListener("load", () => loaded(img));
  };

  loadingImages.forEach(async (img) => {
    if (!(img instanceof HTMLImageElement)) return;

    // For some reason when I tested, some images whom are loaded already got
    // the loading class, and this kinda prevents it
    await new Promise((resolve) => setTimeout(resolve, 100));
    if (img.complete) {
      loaded(img);
    } else {
      img.classList.add("loading");
      img.addEventListener("load", () => loaded(img));
    }
  });
};
