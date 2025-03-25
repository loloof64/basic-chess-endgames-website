import { useTranslations } from "next-intl";
import { additionalSamples } from "@/app/data/samples_definitions";

export default function AdditionalSamplesPage() {
  const t = useTranslations();

  return (
    <>
      <h1 className="text-center text-xl my-4 md:text-3xl font-bold">
        {t("AdditionalSamplesPage.title")}
      </h1>
      <main>
        <p className="p-2">{t("AdditionalSamplesPage.description")}</p>
        <ol className="px-12 list-decimal">
          {additionalSamples.map((sample) => (
            <li key={sample.path}>
              <a
                href={sample.path}
                download
                className="underline text-blue-400"
              >
                {t(sample.captionKey)}
              </a>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
