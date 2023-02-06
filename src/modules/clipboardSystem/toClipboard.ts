import Text from "@/types/Text";

async function convert2Png(blob: Blob): Promise<Blob | null> {
  if (blob.type === "image/png") return blob;

  const $img: HTMLImageElement = await new Promise((resolve) => {
    const _$img = document.createElement("img");
    _$img.crossOrigin = "Anonymous";
    _$img.src = URL.createObjectURL(blob);
    _$img.addEventListener("load", () => {
      resolve(_$img);
    });
  });

  const $canvas = document.createElement("canvas");
  $canvas.width = $img.width;
  $canvas.height = $img.height;

  const ctx = $canvas.getContext("2d");
  if (!ctx) return null;

  ctx.drawImage($img, 0, 0);

  return await new Promise((resolve) => {
    $canvas.toBlob((blob) => {
      resolve(blob);
    }, "image/png");
  });
}

async function toClipboardImage(data: Blob) {
  const pngBlob = await convert2Png(data);
  if (!pngBlob) return false;

  window.navigator.clipboard.write([
    new ClipboardItem({
      [pngBlob.type]: pngBlob,
    }),
  ]);

  return true;
}

async function toClipboardText(data: Text) {
  try {
    await window.navigator.clipboard.writeText(data);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
}

export default async function toClipboard(data: Text | Blob): Promise<Boolean> {
  try {
    if (data instanceof Blob) {
      await toClipboardImage(data);
    } else {
      await toClipboardText(data);
    }

    return true;
  } catch (err) {
    return false;
  }
}
