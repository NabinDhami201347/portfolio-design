import { formatDate } from "../../helpers";

const Footer = () => {
  const today = formatDate(new Date());
  return (
    <footer className="w-full h-10 flex items-center justify-center py-2 bg-background dark:bg-background_dark border-t-2 border-gray-300 dark:border-gray-600">
      <div className="w-11/12 mx-auto">
        <p className="text-center text-sm dark:text-gray-400 text-gray-500">
          &copy; Nabin Dhami{" "}
          <span className="text-lg dark:text-gray-100 text-gray-600">.</span>{" "}
          {today}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
