import React, { Suspense } from "react";
import { Metadata } from "next";
import { OfficialDocumentScreen } from "@/screen/OfficialDocument";
import { getDictionaryByFolder } from "../../dictionaries";

async function DocumentCategory({ params }: any) {
  const { lang } = params;

  const dict = await getDictionaryByFolder(lang, "document_category");
  return <OfficialDocumentScreen />;
}

export default DocumentCategory;
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { lang } = params;

  const dict = await getDictionaryByFolder(lang, "document_category");

  return {
    title: dict?.head_title,
  };
}
