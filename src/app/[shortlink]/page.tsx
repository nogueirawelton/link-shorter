import { redirect } from "next/navigation";

export default async function ShortLinkPage({
  params,
}: {
  params: { shortlink: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/shortlink/${params.shortlink}`
  );
  const url = await response.json();

    return redirect(url);
}
