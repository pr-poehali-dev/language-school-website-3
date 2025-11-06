import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground/5 border-t">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">LinguaSchool</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Языковая школа с 12-летним опытом работы
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Программы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Английский язык</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Немецкий язык</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Французский язык</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Испанский язык</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">О школе</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Наша команда</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Методика</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Лицензии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>г. Москва, ул. Пушкина, д. 10</li>
              <li>+7 (495) 123-45-67</li>
              <li>info@linguaschool.ru</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 LinguaSchool. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
