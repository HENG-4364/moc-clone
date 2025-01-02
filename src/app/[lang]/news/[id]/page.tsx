import { Metadata } from "next";
import React from "react";
// import { client } from "../../../../libs/graphql/apollo";
// import { settings } from "../../../../libs/settings";
// import NewsDetailScreen from "../../../../screens/NewsDetail";
// import { getDictionaryByFolder } from "../../dictionaries";
// import { NEWS_DETAIL } from "../../../../gql/News/Query";

// async function getData(params: any) {
//   const { id } = params;
//   const { data } = await client.query({
//     query: NEWS_DETAIL,
//     variables: {
//       id: Number(id),
//       websiteId: settings.websiteId,
//     },
//   });
//   return {
//     news: data.publicNewsDetail,
//   };
// }

async function NewsDetail({ params }: any) {
  // const { news } = await getData(params);
  // const { lang } = params;

  // const dict = await getDictionaryByFolder(lang, "news");
  // return <NewsDetailScreen news={news} dict={dict} />;
}

// export default NewsDetail;
// export async function generateMetadata({ params }: any): Promise<Metadata> {
//   const { news } = await getData(params);
//   const { lang } = params;

//   const first =
//     lang === "kh" ? news?.title : news?.title_en ? news?.title_en : news?.title;
//   const title = `${first} | moc.gov.kh`;

//   return { title };
// }
