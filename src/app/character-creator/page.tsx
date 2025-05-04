import { CharacterCreator } from "@/modules/character-creator/CharacterCreator";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";

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
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="container flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
              Character Creator
            </h2>
          </div>
          <CharacterCreator />
        </div>
      </div>
    </SidebarProvider>
  );
}
