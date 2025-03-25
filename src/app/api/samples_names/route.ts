import { additionalSamples } from "@/app/additional_samples/page";

// Get all samples names, witohut the extension
export async function GET(request: Request) {
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
