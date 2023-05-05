import { formatDate } from "../helpers";

const Footer = () => {
  const today = formatDate(new Date());
  return (
    <footer className="w-full h-10 flex items-center justify-center py-2 bg-background dark:bg-background_dark border-t-2 border-gray-300 dark:border-gray-600">
      <div className="w-11/12 mx-auto">
        <p className="text-center">&copy; Nabin Dhami {today}</p>
      </div>
    </footer>
  );
};

export default Footer;
