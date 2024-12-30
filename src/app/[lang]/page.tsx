import { Title } from "@/components/Title/Title";
import HomeScreen from "@/screen/Home/HomeScreen";
import { Metadata } from "next";
import { getDictionaryByFolder } from "./dictionaries";

export default async function Home({ params }: { params: any }) {
  const { lang } = params;
  const dict = await getDictionaryByFolder(lang, "home");
  return (
    <>
      <HomeScreen dict={dict} />
    </>
  );
}
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { lang } = params;

  const dict = await getDictionaryByFolder(lang, "home");

  return {
    title: dict?.head_title,
  };
}
