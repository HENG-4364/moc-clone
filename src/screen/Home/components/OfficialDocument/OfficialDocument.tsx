"use client";

import { Title } from "@/components/Title/Title";
import OfficialDocumentCard from "./OfficialDocumentCard/OfficialDocumentCard";

export default function OfficialDocuments() {
  return (
    <div >
      <Title title={"ឯកសារផ្លូវការ"} />
      <div className="bg-[#F8FCFF] py-12">
        <div className="container mx-auto">
          <OfficialDocumentCard />
        </div>
      </div>
    </div>
  );
}