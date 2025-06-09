import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

export default function StoryCard() {
  const imageUrl = "/images/story.jpg";
  return (
    <Link
      href="#"
      className="relative rounded-[34px] w-[170px] h-[200px] overflow-hidden hover:scale-105 transition-transform"
    >
      <Image
        src={imageUrl}
        alt="Story background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-xl font-semibold leading-tight">Les voix dans les murs</p>
        <div className="text-white text-xl flex justify-end pr-2">
          <BsArrowRight />
        </div>
      </div>
    </Link>
  );
}
