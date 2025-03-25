import { useTranslations } from "next-intl";

export default function UseConditionsPage() {
    const t = useTranslations();
  return (
    <>
      <h1 className="text-center text-xl mb-4 md:text-3xl font-bold">{t('UseConditionsPage.title')}</h1>
      <main>
        <p className="p-2">{t('UseConditionsPage.description')}</p>
      </main>
    </>
  )
}
