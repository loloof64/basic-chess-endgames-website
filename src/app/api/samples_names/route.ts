import { additionalSamples } from "@/app/data/samples_definitions";

// Get all samples names, witohut the extension
export async function GET() {
  const namesWithoutExtension = additionalSamples.map((sample) => {
    const path = sample.path;
    const lastPathSegment = path.split("/").pop();
    const name = lastPathSegment?.replace(".txt", "");
    return name;
  });
  return new Response(JSON.stringify({ names: namesWithoutExtension }), {
    status: 200,
  });
}
