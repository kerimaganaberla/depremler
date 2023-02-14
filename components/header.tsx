import Link from "next/link";
import ThemeButton from "@/components/theme-button";
import Logo from "@/components/logo";
import DirectButton from "./direct-button";

export default function Header() {
  return (
    <header className="mb-10 flex items-center gap-4 bg-zinc-50 px-6 py-4 dark:bg-zinc-800 sm:mb-20">
      <Logo />

      <ThemeButton />

      <div className="ml-auto">
        <DirectButton to="/nasil-kullanilir" buttonText="Nasıl Kullanılır?" width={48} />
        <DirectButton to="/iletisim" buttonText="İletişim"  width={24}/>
      </div>
    </header>
  );
}
