export const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

export const convertBlobToDataURL = async (blob) => {
  const mimeType = blob.type;
  console.log("Type MIME du blob :", mimeType); // Ajoutez cette ligne pour déboguer

  const extension = MIME_TYPES[mimeType];

  if (!extension) {
    console.error("Extension not found for MIME type:", mimeType);
    return null;
  }

  const buffer = await blob.arrayBuffer();
  const dataURL = `data:${mimeType};base64,${Buffer.from(buffer).toString(
    "base64"
  )}`;

  return dataURL;
};
