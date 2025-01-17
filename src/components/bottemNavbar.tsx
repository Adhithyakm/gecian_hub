import {
  faCalendarAlt,
  faClipboardList,
  faHome,
  faQuestionCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomNavBar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 border-t border-gray-300 bg-background text-foreground shadow-md dark:border-gray-700 md:block lg:hidden">
      <ul className="flex items-center justify-around py-2">
        {/* Home */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faHome} className="size-6" />
          </button>
        </li>

        {/* Calendar */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faCalendarAlt} className="size-6" />
          </button>
        </li>

        {/* User */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faUser} className="size-6" />
          </button>
        </li>

        {/* Question Circle */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faQuestionCircle} className="size-6" />
          </button>
        </li>

        {/* Clipboard List */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faClipboardList} className="size-6" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavBar;
