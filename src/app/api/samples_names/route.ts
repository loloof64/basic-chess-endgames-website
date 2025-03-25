import { additionalSamples } from "@/app/data/samples_definitions";
import path from "path";
import fs from "fs/promises";

const acceptedLocales = ["en", "fr", "es"];

// Get all samples names, witohut the extension => {name: string, label: string}
// You can give locale as a header (en/fr/es) : will fallback to "en" if necessary
export async function GET(request: Request) {
  const headers = request.headers;
  const requestedlocale = (headers.get("locale") || "en").substring(0, 2);
  const locale = acceptedLocales.includes(requestedlocale)
    ? requestedlocale
    : "en";
  const filePath = path.join(process.cwd(), "messages", `${locale}.json`);
  const fileContent = await fs.readFile(filePath, "utf-8");
  const translations = JSON.parse(fileContent);
  const namesWithoutExtension = additionalSamples.map((sample) => {
    const path = sample.path;
    const lastPathSegment = path.split("/").pop();
    const name = lastPathSegment?.replace(".txt", "");
    const labelKey = sample.captionKey;
    const label = translations["Samples"][labelKey];
    return {
      name,
      label,
    };
  });
  return new Response(JSON.stringify({ names: namesWithoutExtension }), {
    status: 200,
  });
}
