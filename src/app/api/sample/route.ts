import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";


// Get a sample content by name
// Simply set the 'name' header to the name of the requested file without the extension
export async function GET(request: Request) {
  const headers = request.headers;
  const sample_name = headers.get("name");
  if (!sample_name) {
    return new NextResponse("Missing sample name", { status: 400 });
  }
  const basePath = `/scripts/${sample_name}.txt`;
  const filePath = path.join(process.cwd(), "public", basePath);
  try {
    const content = await fs.readFile(filePath, "utf8");

    return new NextResponse(JSON.stringify({ content: content }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      "Error while trying to read sample : is the name correct ?",
      { status: 500 }
    );
  }
}
