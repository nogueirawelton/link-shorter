import { Form } from "@/components/form";

export default function Home() {
  return (
    <main className="h-screen grid place-items-center">
      <div className="flex flex-col items-center gap-8 px-4 lg:px-0">
        <div className="border gap-8 flex flex-col items-center rounded-lg px-4 lg:px-20 py-12">
          <h2 className="font-bold text-center text-2xl">
            Cole a URL para ser encurtada
          </h2>

          <Form />

          <p className="text-center text-sm lg:text-base">
            Kpz Shorter é uma ferramenta para encurtar URLs e gerar links curtos
            <br />
            Com o encurtador de URL é possível criar um link encurtado fácil de
            compartilhar
          </p>
        </div>
      </div>
    </main>
  );
}
