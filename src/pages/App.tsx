import { ThemeProvider } from "@/components/theme/theme-switcher";
import { Buttons } from "@/components/main/buttons";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { buttons } from "@/config";
import { CustomAvatar } from "@/components/main/avatar";
import { Copylink } from "@/components/main/copylink";
import Wattermark from "@/components/main/wattermark";

export function App() {
  return (
    <div className="pb-16">
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="flex  justify-between items-center">
          <div className="p-4 flex justify-start">
            <Copylink />
          </div>
          <div className="p-4 flex justify-start">
            <ModeToggle />
          </div>
        </div>
        <CustomAvatar />
        <Buttons buttons={buttons} />
        <Wattermark />
      </ThemeProvider>
    </div>
  );
}
