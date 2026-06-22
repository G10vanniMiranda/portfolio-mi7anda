import Link from "next/link";
import { siteConfig } from "../lib/site";

export default function ContatoContent() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-linear-to-b from-black via-neutral-950 to-black px-6 py-36 text-white">
      <h1 className="hero-reveal mb-10 bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-center text-4xl font-extrabold text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.35)] md:text-6xl">
        Conecte-se <span className="text-sky-400">com o Futuro</span>
      </h1>

      <div className="hero-reveal hero-reveal-delayed mx-auto max-w-3xl px-2 text-center">
        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          Cada vez que um cliente acessa seu site, ele decide em poucos segundos se sua marca
          transmite confiança. Eu crio experiências digitais que fazem o cliente{" "}
          <strong>parar, prestar atenção e agir.</strong>
        </p>
        <p className="mb-6 leading-relaxed text-gray-400">
          Se você quer um site moderno, rápido e com o mesmo padrão que grandes marcas usam,
          então é hora de dar o próximo passo.
        </p>
        <p className="mb-10 italic leading-relaxed text-gray-400">
          Transforme sua presença online em uma máquina de conversão — com design, performance
          e estratégia.
        </p>
      </div>

      <div className="hero-reveal hero-reveal-actions flex justify-center">
        <Link
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-10 py-4 text-lg font-medium text-white shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-transform hover:scale-[1.03]"
        >
          Falar com Giovanni Agora
        </Link>
      </div>

      <p className="mt-12 text-center text-gray-500">
        Respondo pessoalmente todas as mensagens — porque cada projeto merece atenção total.
      </p>
    </main>
  );
}
