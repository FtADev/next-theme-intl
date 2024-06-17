import { useTranslations } from "next-intl";
import LocalSwitcher from "../components/LocalSwitcher";
import ThemeToggle from "../components/ThemeToggle";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main className="bg-primary flex min-h-screen flex-col items-center justify-between p-24 ">
      <LocalSwitcher />
      <ThemeToggle />
      <h1 className="text-secondary text-4xl font-bold">
        This is a test project
      </h1>
      <h1>{t("title")}</h1>;
    </main>
  );
}
