import {} from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const reqHeaders = await headers();
  const locale = reqHeaders.get("Accept-Language")?.substring(0,2) || 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
