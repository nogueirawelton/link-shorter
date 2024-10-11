import { client } from "@/prisma/client";

export async function POST(request: Request) {
  const body = await request.json();
  const { url } = body;

  const short_url = Math.random().toString(36).substring(2, 10);

  const data = await client.shortLink.create({
    data: {
      url,
      short_url,
    },
  });

  return Response.json(data.short_url);
}
