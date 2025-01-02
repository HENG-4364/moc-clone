"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type LoadingSpinnerProps = {
  title: string;
  isDark?: boolean;
};

export default function LoadingSpinner({
  title,
  isDark = false,
}: LoadingSpinnerProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Image
              src="/flower-bg-loading.png"
              alt="floating-logo"
              width={40}
              height={40}
              className="w-auto h-auto opacity-20 select-none"
              style={{
                width: Math.random() * 30 + 25 + "px",
                height: "auto",
              }}
              priority
            />
          </div>
        ))}
      </div>

      {/* Wavy Lines */}
      <div className="absolute bottom-0 w-full">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-full h-64 opacity-20"
            style={{
              background: `linear-gradient(transparent, #2980B9)`,
              transform: `translateX(${i * 100}%)`,
              animation: `wave ${4 + i}s linear infinite`,
              animationDelay: `${i * -2}s`,
            }}
          />
        ))}
      </div>

      {/* Logo and Text */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <Image
          src="/moc-logo.png"
          alt="Ministry of Interior Logo"
          width={480}
          height={480}
          priority
          className="animate-fade-in w-[200px] md:w-[300px] xl:w-[400px]"
        />
        {/* <div className="mt-5">
          <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        </div> */}
      </div>
    </div>
  );
}
