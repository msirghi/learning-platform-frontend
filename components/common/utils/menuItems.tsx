// @ts-nocheck
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import StarIcon from "@material-ui/icons/Star";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { MenuItem } from "../../../common/types";
import HelpIcon from '@material-ui/icons/Help';
import styles from '../../../styles/modules/Shared.module.scss';

export const menuItems: MenuItem[] = [
  {
    icon: HomeIcon,
    link: "/home",
    label: "Home",
  },
  {
    icon: MenuBookIcon,
    link: "/myCourses",
    label: "My Courses",
  },
  {
    icon: GroupIcon,
    link: "/group",
    label: "Group",
  },
  {
    icon: StarIcon,
    link: "/star",
    label: "Star",
  },
  {
    icon: CalendarTodayIcon,
    link: "/calendar",
    label: "Calendar",
  },
  {
    icon: HelpIcon,
    link: '/help',
    label: 'Help',
    className: styles.mainMenuAlignBottom
  }
];
