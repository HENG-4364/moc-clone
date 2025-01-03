
import React from "react";
import NewsDetailScreen from "@/screen/NewsDetail";




async function NewsDetail({ params }: any) {
  const { lang } = params;
  return <NewsDetailScreen />;
}

export default NewsDetail;
