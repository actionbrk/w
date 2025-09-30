import Button from "./components/button";
import StoryCard from "./components/story-card";
import { canela } from "./fonts";
import { BsStar } from "react-icons/bs";
import Image from "next/image";
import { HeaderNavLink } from "./components/header/nav-link";
import books from "../public/images/books.jpg";
import { SearchBar } from "./components/search/search-bar";
import PricingCard from "./components/pricing";

export default function Page() {
  return (
    <>
      {/* Conteneur principal avec le fond violet solide */}
      <div
        className="relative bg-no-repeat"
        style={{ backgroundColor: "#24284D" }}
      >
        {/* Superposition pour l'image de fond avec transparence */}
        <div className="absolute inset-0 opacity-25">
          <Image
            src={books}
            alt="Books background"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Barre de navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-18 py-6 flex items-center justify-between text-white bg-transparent w-full">
          {/* Menus de navigation (à gauche) */}

          <div className="flex space-x-8">
            <HeaderNavLink href="/" activeClassName="border-b-3">
              Home
            </HeaderNavLink>
            <HeaderNavLink href="/library">Library</HeaderNavLink>
            <HeaderNavLink href="/competition">Concours</HeaderNavLink>
            <HeaderNavLink href="/about">About Us</HeaderNavLink>
          </div>

          {/* Boutons (à droite) */}
          <div className="flex space-x-4">
            <Button variant="primarylight">Write</Button>
            <Button variant="secondary">Log In</Button>
          </div>
        </nav>

        <section className="relative flex flex-col items-start justify-center min-h-screen px-18 gap-3">
          <h1
            className={`${canela.className} text-7xl sm:text-8xl text-white p-2`}
          >
            The W Project
          </h1>
          <p className="text-sm font-light text-white max-w-2xl p-2">
            Welcome to the W Project website. Writers: publish your work chapter
            by chapter and get paid! Readers: read all the originals and
            unpublished stories for free!
          </p>
          <SearchBar buttonVisible={false} />
        </section>

        {/* Superposition pour l'effet de fondu en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-lavender via-lavender/70 to-transparent">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2"></div>
            <div className="w-full sm:w-1/2 p-4">
              <h2 className="text-white text-2xl font-semibold flex items-center gap-4">
                <BsStar />
                <span>Most Popular</span>
              </h2>
              <div className="flex flex-wrap gap-4 mt-8">
                <StoryCard />
                <StoryCard />
                <StoryCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section suivante de la page (après le fondu) */}
      <div className="px-18 py-20 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <h2 className={`${canela.className} text-[#24284D] text-5xl`}>
            Join the W Project
          </h2>
          <p className="text-sm text-[#24284D] pt-10">
            Would you like to publish a novel? A short story? A memoir? A poem?
            And get paid for your work?
            <br />
            Do you want your readers to have access to your content without
            being deterred by the price of the book?
            <br />
            The W Project is for you! With this website, you can publish your
            work online free of charge, so that it becomes public and your
            reputation earns you a profit.
          </p>
          <div className="mt-10 flex justify-start">
            <Button>Start To Create</Button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center pt-10">
          <Image
            src="/images/join.jpg"
            alt="Join"
            height={500}
            width={300}
            priority
            className="rounded-[34px]"
          />
        </div>
      </div>

      <section className="px-18 py-20 bg-[#656BA8]">
        <h2 className={`${canela.className} text-white text-center text-5xl`}>
          How It Works
        </h2>
      </section>

      <section className="px-18 py-20 bg-[#F5F6FA]">
        <h2 className={`${canela.className} text-[#24284D] text-left text-5xl mb-12`}>
          Prices
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <PricingCard
            title="Free"
            price={0}
            features={["Blabla", "Blabla", "Blabla", "Blabla", "Blabla"]}
            buttonText="Get Started Free"
          />
          <PricingCard
            title="Membership"
            price={18}
            features={["Blabla", "Blabla", "Blabla", "Blabla", "Blabla"]}
            buttonText="Get Membership"
            popular
          />
          <PricingCard
            title="Premium"
            price={25}
            features={["Blabla", "Blabla", "Blabla", "Blabla", "Blabla"]}
            buttonText="Get Membership"
            dark
          />
        </div>
      </section>
    </>
  );
}
