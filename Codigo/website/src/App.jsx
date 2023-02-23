import { useQuery } from "@apollo/client";
import { useState } from "react";
import SmoothScroll from "smooth-scroll";
import io from "socket.io-client";
import "./App.css";
import { About } from "./components/about";
import { AnimaisDisponiveis } from "./components/animaisDisponiveis";
import { Contact } from "./components/contact";
import { Doacao } from "./components/doacao";
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { PrestacaoContas } from "./components/prestacaoContas";
import JsonData from "./data/data.json";
import { FETCH_ANIMALS } from "./graphql/fetchAnimals";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const socket = io("http://localhost:3335");

const App = () => {
  const [landingPageData] = useState(JsonData);

  const { data, refetch } = useQuery(FETCH_ANIMALS);

  socket.on("@artemis:animal-created", async ({ animal, user }) => {
    await refetch();
  });

  socket.on("@artemis:remove-animal", async ({ animal, user }) => {
    await refetch();
  });

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Doacao data={landingPageData.Doacao} />

      <AnimaisDisponiveis animals={data?.animals_availables} />
      <PrestacaoContas data={landingPageData.PrestacaoContas} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
