import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/hr.svg"
            alt="Croatian"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/es.svg"
            alt="Spanish"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/fr.svg"
            alt="French"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/it.svg"
            alt="Italian"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/jp.svg"
            alt="Japanese"
            width={40}
            height={32}
            className="mr-4 rounded-md border border-slate-300"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
