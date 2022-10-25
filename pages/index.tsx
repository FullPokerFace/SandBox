import type { NextPage } from "next";
import Head from "next/head";
import Clients from "../components/Clients/Clients";
import { Hero } from "../components/Hero/Hero";
import { Nav } from "../components/Nav/Nav";
import { WhatWeDo } from "../components/WhatWeDo/WhatWeDo";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sandbox - createive design agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className=" relative text-zinc-800 font-urbanist flex flex-col gap-10 lg:gap-20 ">
        <Nav />
        <Hero />
        <Clients />
        <WhatWeDo />
      </main>
    </div>
  );
};

export default Home;
