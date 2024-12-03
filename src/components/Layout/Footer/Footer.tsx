import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Youtube, Send } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full">
      {/* Decorative Banner */}
      <div className="w-full">
        <Image
          src="/footer-title-image.png"
          alt="Decorative cultural banner"
          width={1920}
          height={1000}
          className="hidden sm:flex w-full"
        />
      </div>
      <div className="bg-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <Image
                src="/moc-logo.png"
                alt="Ministry of Commerce Logo"
                width={800}
                height={800}
                className="w-[240px]"
              />
              <div className="mt-6">
                <p className="text-sm text-muted-foreground  leading-8">
                  សូមស្វាគមន៍មកកាន់ក្រសួងពាណិជ្ជកម្មនិងសូមអរគុណចំពោះការចូលមកកាន់គេហទំព័ររបស់យើងខ្ញុំ។
                  ខ្ញុំមានសេចក្តីរីករាយសូមជម្រាបជូនថាបេសកកម្មរបស់ក្រសួងគឺផ្តល់ជូនសាធារណៈជននូវរាល់សេវាកម្មទាក់ទងនឹងពាណិជ្ជកម្ម
                  ទីផ្សារថ្មីៗ និងបន្តអនុវត្តគោលនយោបាយពាណិជ្ជកម្មរបស់
                  កម្ពុជាដើម្បីផលប្រយោជន៍ដ៏ធំធេងនៃការអភិវឌ្ឍ
                </p>
              </div>
              {/* Social Media Links */}
              <div className=" mt-8">
                <div className="mb-4">បណ្តាញសង្គម: ក្រសួងពាណិជ្ជកម្ម</div>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Send className="h-5 w-5" />
                    <span className="sr-only">Telegram</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-14 ">
              <div className="font-semibold mb-6 text-lg">តំណភ្ជាប់សំខាន់ៗ</div>
              <ul className="space-y-3 list-disc ml-5 ">
                <li>
                  <Link href="#" className="">
                    អំពីក្រសួង
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    ឯកសារផ្លូវការ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    សន្ទស្សន៍ថ្លៃទំនិញប្រចាំថ្ងៃ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    សន្ទស្សន៍តម្លៃអ្នកប្រើប្រាស់
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="mt-14">
              <h3 className="font-semibold mb-6 text-lg">តំណផ្សេងៗ</h3>
              <ul className="space-y-3 list-disc ml-5">
                <li>
                  <Link href="#" className="">
                    ចុះបញ្ជីរពាណិជ្ជកម្ម អាជ្ញាប័ណ្ណពាណិជ្ជកម្ម
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    មអេឡិចត្រូនិក
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    កម្មសិទ្ធិបញ្ញា
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    ប្រតិបត្តិការដែលមានកិច្ចធានា
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    សេវានាំចេញទំនិញ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    អគ្គាធិការដ្ឋាន
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-14">
              <h3 className="font-semibold mb-6 text-lg">ទំនាក់ទំនង</h3>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground">
                  <span className="font-medium">Tel:</span> 1266
                </li>
                <li className="text-sm text-muted-foreground">
                  <span className="font-medium">Email:</span>{" "}
                  <Link
                    href="mailto:cabinet.info@moc.gov.kh"
                    className="hover:text-primary"
                  >
                    cabinet.info@moc.gov.kh
                  </Link>
                </li>
                <li className="text-sm text-muted-foreground">
                  <span className="font-medium">Address:</span> Lot 19-61,
                  Russian Federation Blvd, Phnom Penh
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3D8ABE] py-[40px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div>
              <div className="text-center ">
                <Link
                  href="http://www.moc.gov.kh/"
                  target="_blank"
                  className="leading-8 text-white hover:underline sm:flex"
                >
                  <div>
                    {" "}
                    © ២០២៤ ក្រសួងពាណិជ្ជកម្ម. រក្សាសិទ្ធគ្រប់បែបយ៉ាងដោយ
                  </div>
                  {""}
                  <div>&nbsp; ក្រសួងពាណិជ្ជកម្ម</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
