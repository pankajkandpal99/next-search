"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const searchHandler = () => {
    // console.log("search button clicked!");

    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="absolute inset-0 h-full"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              searchHandler();
            }

            if (event.key === "Escape") {
              inputRef?.current?.blur();
            }
          }}
        />

        <Button
          onClick={searchHandler}
          className="absolute right-0 inset-y-0 h-full rounded-l-none"
        >
          <Search className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
