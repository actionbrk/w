import Button from '../components/Button';

export default function Page() {
  const imageUrl = "/images/books.jpg";

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
        <nav className="absolute top-0 left-0 right-0 z-20 px-16 py-6 flex justify-between text-white bg-transparent w-full">
          {/* Menus de navigation (à gauche) */}
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gray-300 transition duration-200 text-lg">Home</a>
            <a href="#" className="hover:text-gray-300 transition duration-200 text-lg">Library</a>
            <a href="#" className="hover:text-gray-300 transition duration-200 text-lg">Concours</a>
            <a href="#" className="hover:text-gray-300 transition duration-200 text-lg">About Us</a>
          </div>

          {/* Boutons (à droite) */}
          <div className="flex space-x-4">
            <Button>Write</Button>
            <Button variant='secondary'>Log In</Button>
          </div>
        </nav>

        {/* Superposition pour l'effet de fondu en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent" />

        <div className="relative z-10 flex flex-col items-start justify-center min-h-screen pl-16">
          <h1 className="text-6xl font-bold text-white mb-8 p-2">
            The W Project
          </h1>
          <p className="text-xl text-white max-w-2xl p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
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
