import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CharacterCreator } from "@/modules/character-creator/CharacterCreator";

export default function CharacterCreatorPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <div className="flex grow min-h-screen flex-col">
        <SiteHeader />
        <div className="container flex-1 space-y-4 p-8 pt-6">
          <Suspense>
            <CharacterCreator />
          </Suspense>
        </div>
      </div>
    </SidebarProvider>
  );
}
