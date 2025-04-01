import { useLocale, useTranslations } from "next-intl";
import FeatureCard from "@/app/ui/home/FeatureCard";

const cardsImages: { [key: string]: string[] } = {
  en: [
    "/images/features/samples_en.png",
    "/images/features/game_en.png",
    "/images/features/script_en.png",
    "/images/features/download_en.png",
  ],
  es: [
    "/images/features/samples_es.png",
    "/images/features/game_es.png",
    "/images/features/script_es.png",
    "/images/features/download_es.png",
  ],
  fr: [
    "/images/features/samples_fr.png",
    "/images/features/game_fr.png",
    "/images/features/script_fr.png",
    "/images/features/download_fr.png",
  ],
};

export default function Home() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <>
      <h1 className="text-center text-xl md:text-3xl font-bold">{t("HomePage.welcome")}</h1>
      <main className="md: px-24">
        <FeatureCard
          description={t("HomePage.description_1")}
          imagePath={cardsImages[locale][0]}
        />
        <FeatureCard
          description={t("HomePage.description_2")}
          imagePath={cardsImages[locale][1]}
        />
        <FeatureCard
          description={t("HomePage.description_3")}
          imagePath={cardsImages[locale][2]}
        />
        <FeatureCard
          description={t("HomePage.description_4")}
          imagePath={cardsImages[locale][3]}
        />
      </main>
    </>
  );
}
