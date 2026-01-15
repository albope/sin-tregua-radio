import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instalar App | Sin Tregua Radio",
  description: "Aprende a instalar Sin Tregua Radio en tu móvil Android o iPhone. Acceso directo y más rápido a tu radio granota favorita.",
  keywords: "instalar app, PWA, Sin Tregua, Levante UD, radio móvil",
};

export default function InstalarAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
