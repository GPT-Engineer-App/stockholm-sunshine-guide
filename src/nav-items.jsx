import { Compass, Ship, PartyPopper } from "lucide-react";
import Index from "./pages/Index.jsx";
import VasaMuseum from "./pages/VasaMuseum.jsx";
import Confetti from "./pages/Confetti.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Visit Stockholm",
    to: "/",
    icon: <Compass className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Vasa Museum",
    to: "/vasa-museum",
    icon: <Ship className="h-4 w-4" />,
    page: <VasaMuseum />,
  },
  {
    title: "Celebrate",
    to: "/celebrate",
    icon: <PartyPopper className="h-4 w-4" />,
    page: <Confetti />,
  },
];
