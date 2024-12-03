import React from "react";
import { MessageFromMinister } from "./components/MessageFromMinister/MessageFromMinister";
import { Announcement } from "./components/HotNew/HotNews";

const HomeScreen = () => {
  return (
    <div>
      <MessageFromMinister
        title={"សូមស្វាគមន៍មកកាន់គេហទំព័រក្រសួងពាណិជ្ជកម្ម"}
        subtitle={`សូមស្វាគមន៍មកកាន់ក្រសួងពាណិជ្ជកម្មនិងសូមអរគុណចំពោះការចូលមកកាន់គេហទំព័ររបស់យើងខ្ញុំ។ ខ្ញុំមានសេចក្តីរីករាយសូមជម្រាបជូនថាបេសកកម្មរបស់ក្រសួងគឺផ្តល់ជូនសាធារណៈជននូវរាល់សេវាកម្មទាក់ទងនឹងពាណិជ្ជកម្ម ទីផ្សារថ្មីៗ និងបន្តអនុវត្តគោលនយោបាយពាណិជ្ជកម្មរបស់ កម្ពុជាដើម្បីផលប្រយោជន៍ដ៏ធំធេងនៃការអភិវឌ្ឍ។`}
        bgImage={"/bc-homepage.png"}
        image={"/ministry-of-commerece.jpg"}
      />
      <Announcement />
    </div>
  );
};

export default HomeScreen;
