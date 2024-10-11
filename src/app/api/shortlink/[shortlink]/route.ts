import { client } from "@/prisma/client";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      shortlink: string;
    };
  }
) {
  const data = await client.shortLink.findUnique({
    where: {
      short_url: params.shortlink,
    },
  });

  return Response.json(data?.url || "/");
}
