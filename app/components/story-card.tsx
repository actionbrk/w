import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export default function StoryCard() {
  const imageUrl = "/images/story.jpg";
  return (
    <Link
      href="#"
      className="bg-cover bg-center rounded-2xl w-[140px] h-[200px] hover:scale-105 transition-transform"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex flex-col justify-end rounded-2xl h-full p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-sm font-semibold leading-tight">Les voix dans les murs</p>
        <div className="text-white text-sm flex justify-end">
          <BsArrowRight />
        </div>
      </div>
    </Link>
  );
}