import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
    const t = useTranslations();
  
    return (
    <>
      <h1 className="text-center text-xl mb-4 md:text-3xl font-bold">{t('PrivacyPolicyPage.title')}</h1>
      <main>
        <p className="p-2">{t('PrivacyPolicyPage.description_1')}</p>
        <p className="p-2">{t('PrivacyPolicyPage.description_2')}</p>
        <p className="p-2">{t('PrivacyPolicyPage.description_3')}</p>
      </main>
    </>
  );
}
