import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kizil Fashion" },
    { name: "description", content: "Welcome to Kizil Fashion!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
