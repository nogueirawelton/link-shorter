"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormData, schema } from "./schema";

export function Form() {
  const { toast } = useToast();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async ({ url }: FormData) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/shortlink`,
      {
        method: "POST",
        body: JSON.stringify({
          url,
        }),
      }
    );

    const short_url = await response.json();

    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${short_url}`
    );

    reset();

    toast({
      title: "URL Encurtada!",
      description: `O link foi copiado para sua área de transferência!`,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:flex-row w-full gap-2 items-center"
    >
      <Input
        data-error={!!errors.url}
        type="text"
        className="flex-1 data-[error=true]:border-red-500"
        placeholder="Cole o link aqui"
        {...register("url")}
      />

      <Button type="submit">Encurtar URL</Button>
    </form>
  );
}
