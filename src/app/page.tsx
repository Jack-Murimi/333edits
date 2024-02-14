"use client";

import { useStateContext } from "@/context/state-context";

export default function Home() {
  const { isOpen } = useStateContext();
  return (
    <section className="flex-1 p-4 md:p-8 lg:p-12">
      {isOpen ? "Menu Opened" : "Menu Closed"}
    </section>
  );
}
