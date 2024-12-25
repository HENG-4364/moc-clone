import React, { Suspense } from "react";
import { Metadata } from "next";
import { OfficialDocumentScreen } from "@/screen/OfficialDocument";

async function DocumentCategory({ params }: any) {
  return <OfficialDocumentScreen />;
}

export default DocumentCategory;
