import React, { useEffect, useState } from 'react';
import FullCalendar, { ViewContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useWindowSize } from '../common/hooks/useWindowResize';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import { useTheme } from '@material-ui/core';
import { lessonMock } from '../../mocks/lessonMocks';
import { useTranslation } from '../../i18n';

type HeaderToolbar = {
  left: string;
  center: string;
  right: string;
};

const desktopToolbar = {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek,timeGridDay'
};

type Props = {
  selectLesson: (id: string) => void;
};

/**
 * Calendar component. FullCalendar library is used.
 * On mobile day calendar will be show, on desktop: week calendar (may be changed by user).
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 * @param {Function} selectLesson Function which will be fired on calendar event click.
 */
const Calendar: React.FC<Props> = ({ selectLesson }) => {
  const [calendarView, setCalendarView] = useState<HeaderToolbar>(desktopToolbar);
  const [width] = useWindowSize();
  const calendarRef = React.useRef<FullCalendar>();
  const theme = useTheme();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (width < 768) {
      setCalendarView({
        left: 'prev,next',
        center: '',
        right: 'dayGridMonth,timeGridDay'
      });
      return;
    }
    setCalendarView(desktopToolbar);
  }, [width]);

  const handleResize = (event: ViewContentArg): void => {
    const contentApi = event.view.calendar;
    if (width < 768) {
      contentApi.changeView('timeGridDay');
      return;
    }
    contentApi.changeView('timeGridWeek');
  };

  return (
    <FullCalendar
      eventColor={theme.palette.primary.main}
      selectable
      editable={false}
      eventClick={(arg) => selectLesson(arg.event.id)}
      events={lessonMock}
      allDaySlot={false}
      slotMinTime={'8:00'}
      slotMaxTime={'20:00'}
      windowResize={handleResize}
      ref={calendarRef}
      contentHeight={'auto'}
      headerToolbar={calendarView}
      initialView={width < 768 ? 'timeGridDay' : 'dayGridMonth'}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      nowIndicator
      locale={i18n.language}
    />
  );
};

export default Calendar;
