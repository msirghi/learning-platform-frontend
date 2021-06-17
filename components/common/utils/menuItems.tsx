// @ts-nocheck
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { MenuItem } from '../../../common/types';
import HelpIcon from '@material-ui/icons/Help';
import styles from '../../../styles/modules/Shared.module.scss';
import i18n from '../../../i18n';

export const menuItems: MenuItem[] = [
  {
    icon: HomeIcon,
    link: '/home',
    label: i18n.t('common:headerTabs:home')
  },
  {
    icon: MenuBookIcon,
    link: '/myCourses',
    label: i18n.t('common:headerTabs:myCourses')
  },
  {
    icon: GroupIcon,
    link: '/myGroup',
    label: i18n.t('common:headerTabs:myGroup')
  },
  {
    icon: TrendingUpIcon,
    link: '/performance',
    label: i18n.t('common:headerTabs:performance')
  },
  {
    icon: CalendarTodayIcon,
    link: '/calendar',
    label: i18n.t('common:headerTabs:calendar')
  },
  {
    icon: HelpIcon,
    link: '/help',
    label: i18n.t('common:headerTabs:help'),
    className: styles.mainMenuAlignBottom
  }
];
