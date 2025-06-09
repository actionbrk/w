import { Merriweather_Sans } from "next/font/google";
import localFont from 'next/font/local'

export const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

export const canela = localFont({
  src: [
    {
      path: '../public/fonts/Canela-Black-Trial.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Canela-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    }
  ],
})