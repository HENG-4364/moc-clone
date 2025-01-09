import HighPotentialProductsScreen from "@/screen/Post";
import React, { Suspense } from "react";
import { getDictionaryByFolder } from "../../dictionaries";

export default async function HighPotentialProducts({
  params,
}: {
  params: any;
}) {
  const { lang } = params;
  const dict = await getDictionaryByFolder(lang, "high_potential_products");
  return (
    <Suspense fallback={<></>}>
      <HighPotentialProductsScreen dict={dict}/>
    </Suspense>
  );
}
