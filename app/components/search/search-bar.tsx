"use client";

import { LuEllipsis, LuSearch } from "react-icons/lu";
import { SearchBadge } from "./search-badge";
import { useState } from "react";

type SearchBarProps = {
  buttonVisible: boolean;
};

export function SearchBar({ buttonVisible = false }: SearchBarProps) {
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const badges = ["Fantastique", "Historique", "Sci-Fi", "Médiéval"];
  return (
    <>
      <search className="w-1/2 flex flex-col gap-5">
        <form>
          <label className="sr-only" htmlFor="movie">
            Search
          </label>
          <div className="relative w-1/3">
            <span className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <LuSearch className="text-white text-xl" />
            </span>
            <input
              className={
                "rounded-3xl border-2 border-white w-full ps-10 py-2 text-white placeholder-white font-light focus:ring-blue-500! focus:border-blue-500!" +
                (buttonVisible ? " pe-20" : " pe-2")
              }
              type="search"
              id="movie"
              placeholder="Search"
              name="search"
              defaultValue={searchText}
              required
            />
            {buttonVisible ? (
              <div className="absolute inset-y-0 end-0 flex items-center py-1.5 pe-1.5">
                <button
                  type="submit"
                  className="h-full w-fit! bg-primary-500 text-white rounded-2xl px-3"
                >
                  Search
                </button>
              </div>
            ) : (
              <button type="submit"></button>
            )}
          </div>
        </form>
        {badges.length > 0 && (
          <div className="flex gap-2">
            {badges.slice(0, 3).map((text) => (
              <SearchBadge onClick={() => setSearchText(text)} key={text}>
                {text}
              </SearchBadge>
            ))}
            {badges.length > 3 && (
              <SearchBadge className="rounded-full aspect-square flex items-center justify-center w-[32px]">
                <LuEllipsis />
              </SearchBadge>
            )}
          </div>
        )}
      </search>
    </>
  );
}
