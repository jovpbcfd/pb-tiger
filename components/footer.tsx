// components/Footer.tsx

import Image from "next/image";

const partners = [
  "/img/footer/provider-awcmfc-1.png",
  "/img/footer/provider-awcmjili.png",
  "/img/footer/provider-awcmp8.png",
  "/img/footer/provider-awcmpp.png",
  "/img/footer/provider-awcmsexy.png",
  "/img/footer/provider-awcmyesbingo.png",
  "/img/footer/provider-awcmyl.png",
  "/img/footer/provider-cq9.png",
  "/img/footer/partner9.png",
  "/img/footer/provider-cq9.png",
  "/img/footer/provider-evo.png",
  "/img/footer/provider-hotroad.png",
  "/img/footer/provider-icf.png",
  "/img/footer/provider-jdb.png",
  "/img/footer/provider-jdbaspribe.png",
  "/img/footer/provider-joker.png",
  "/img/footer/provider-ka.png",
  "/img/footer/provider-km.png",
];

const Footer = () => {
  return (
    <footer className="bg-[#151e6c] text-white px-6 md:px-16 py-10 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
          {/* Left Section */}
          <div className="space-y-2">
            <Image
              src="/img/PANALOBET-LOGO.webp"
              alt="Panalobet Logo"
              width={160}
              height={40}
            />
            <p className="font-semibold text-[#aec6ff]">
              BEST QUALITY PLATFORM
            </p>
            <p className="text-gray-400">
              © 2025 Panalobet Copyrights.
              <br />
              All Rights Reserved
            </p>
          </div>

          {/* Partners Section */}
          <div className="flex-1">
            <p className="font-semibold text-sm text-gray-300 mb-2">PARTNERS</p>
            <div className="flex flex-wrap gap-4">
              {partners.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Partner ${i}`}
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-6" />

        {/* Bottom Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-gray-300">
          <div className="flex flex-wrap gap-4">
            <span>WHAT’S NEW</span>
            <span>GAME ITEMS</span>
            <span>PROMOTIONS</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <span>BEGINNER TEACHING</span>
            <span>ABOUT PANALOBET</span>
            <span>APP DOWNLOAD</span>
          </div>

          <div>
            <p className="font-semibold mb-1">PAYMENT METHODS</p>
            <Image
              src="/img/footer/pay130.png"
              alt="Payment"
              width={24}
              height={24}
            />
          </div>

          <div className="space-y-1">
            <p className="font-semibold">COMMUNITY WEBSITES</p>
            <div className="flex gap-3">
              <Image
                src="/img/footer/telegram-channel.png"
                alt="Telegram"
                width={20}
                height={20}
              />
              <Image
                src="/img/footer/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
              />
              <Image
                src="/img/footer/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </div>

            <p className="font-semibold mt-4">RESPONSIBLE GAMBLING</p>
            <div className="flex gap-3 mt-1">
              <Image
                src="/img/footer/gamcare.png"
                alt="Aware"
                width={20}
                height={20}
              />
              <Image src="/icons/18plus.png" alt="18+" width={20} height={20} />
              <Image
                src="/img/footer/age-limit-21.png"
                alt="Responsible"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
