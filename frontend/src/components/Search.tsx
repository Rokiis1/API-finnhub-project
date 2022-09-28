import React, { useState, useEffect } from "react";
import { useTheme } from "../utils/context/ThemeContext";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { searchSymbol } from "../api/stockApi";
import { Symbol } from "../interface/Stock";

const Search = () => {
  const [searchResult, setSearchResult] = useState<Symbol[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(searchQuery);
      const response = await searchSymbol(query);
      setSearchResult(response);
    })();
  }, [searchQuery]);

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector("#searchText") as HTMLInputElement;
    setSearchQuery(input.value);
    input.value = "";
  };

  const clear = () => {
    setSearchQuery("");
    setSearchResult([]);
  };

  return (
    <form
      className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 dark:bg-gray-900 border-gray-800 bg-white border-neutral-200"
      onSubmit={(e) => search(e)}
    >
      <input
        className="w-full px-4 py-2 focus:outline-none rounded-md dark:bg-gray-900"
        type="text"
        id="searchText"
        placeholder="Search stock..."
      />
      {searchQuery && (
        <button onClick={clear} className="m-1">
          <XMarkIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      <button className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400">
        <MagnifyingGlassIcon className="h-4 w-4 fill-gray-100" />
      </button>
    </form>
  );
};

export default Search;
