import { connectDB } from "@/lib/db/mongodb";
import links from "@/lib/models/links";

export async function POST(req) {
  const body = await req.json();
  await connectDB();
  const existUrl = await links.findOne({ shortUrl: body.shortUrl });
  if (existUrl) {
    return Response.json({
      success: false,
      error: true,
      data: "ShortUrl existed",
      message: "URL already existed",
    });
  }
  const link = await links.create({ url: body.url, shortUrl: body.shortUrl });
  return Response.json({
    success: true,
    error: false,
    data: JSON.parse(JSON.stringify(link)),
    message: "URL has been added"
  });
}

export async function GET() {
  await connectDB();
  
  const allLinks = await links.find({});
  if(!allLinks) return Response.json({success: false, error: true, message: "no links"});

  return Response.json({success: true, error: false, data: JSON.parse(JSON.stringify(allLinks))});
  
}