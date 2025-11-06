import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">LinguaSchool</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#programs" className="text-sm font-medium hover:text-primary transition-colors">Программы</a>
          <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
          <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
          <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
        </nav>
        <Button className="rounded-full">Записаться</Button>
      </div>
    </header>
  );
};

export default Header;
