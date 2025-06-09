import Button from "../components/button";
import StoryCard from "../components/story-card";
import { canela } from "../fonts";
import { BsStar } from "react-icons/bs";

export default function Page() {
  const imageUrl = "/images/books.jpg";
  const navLinkClass = "hover:text-gray-300 transition duration-200 text-lg";

  return (
    <>
      {/* Conteneur principal avec le fond violet solide */}
      <div
        className="relative bg-no-repeat"
        style={{ backgroundColor: '#24284D' }}
      >
        {/* Superposition pour l'image de fond avec transparence */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})`, opacity: 0.4 }}
        ></div>

        {/* Barre de navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-16 py-6 flex items-center justify-between text-white bg-transparent w-full">
          {/* Menus de navigation (à gauche) */}
          
          <div className="flex space-x-8">
            <a href="#" className={navLinkClass}>Home</a>
            <a href="#" className={navLinkClass}>Library</a>
            <a href="#" className={navLinkClass}>Concours</a>
            <a href="#" className={navLinkClass}>About Us</a>
          </div>

          {/* Boutons (à droite) */}
          <div className="flex space-x-4">
            <Button>Write</Button>
            <Button variant='secondary'>Log In</Button>
          </div>
        </nav>

        <div className="relative flex flex-col items-start justify-center min-h-screen pl-16">
          <h1 className={`${canela.className} text-8xl font-bold text-white mb-8 p-2`}>
            The W Project
          </h1>
          <p className="text-sm font-light text-white max-w-2xl p-2">
            Welcome to the W Project website. Writers: publish your work chapter by chapter and get paid! Readers: read all the originals and unpublished stories for free!
          </p>
        </div>

        {/* Superposition pour l'effet de fondu en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent">
          <div className="flex">
            <div className="w-1/2"></div>
            <div className="w-1/2 p-4">
              <h2 className="text-white text-2xl font-semibold flex items-center gap-4">
                <BsStar />
                <span>Most Popular</span>
              </h2>
              <div className="flex gap-4 mt-8">
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section suivante de la page (après le fondu) */}
      <div className="bg-white py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          W
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mt-10 space-y-4 max-w-3xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Section de contenu {i + 1}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
