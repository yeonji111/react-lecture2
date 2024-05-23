// https://jquense.github.io/react-big-calendar/examples/index.html?path=/story/about-big-calendar--page
// https://tailwindcomponents.com/component/free-tailwind-css-calendar-component

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import EventPopup from "./EventPopup";
import { useState, useRef } from "react";
const localizer = momentLocalizer(moment);

const Scheldule = () => {
  const [open, setOpen] = useState(false); // 팝업오픈여부
  const [eventList, setEventList] = useState([]); // 스케줄목록
  const [clickDate, setClickDate] = useState(""); // 클릭된 날짜
  const clickSlot = (param) => {
    setOpen(true); // 팝업 열기
    if (param) {
      // cleandar start, end -> date 객체
      setClickDate(param.start);
    }
  };

  // 옵셔널체이닝 등 활용해서 undefined 막기
  // 태그 안에 객체가 들어가면 child React error -->> 객체형태가 들어간건 아닌지 체크
  const [info, setInfo] = useState({});
  const clickEvent = (param) => {
    setInfo({
      date: moment(param.start).format("YYYY-MM-DD"),
      title: param.title,
      contents: param.contents,
    });
  };

  const onClose = (param) => {
    const { close, info } = param;
    console.log(info);
    if (close) {
      setOpen(false);

      if (info) {
        // 제목, 내용 이벤트 입력
        setEventList([
          ...eventList,
          {
            title: info.title,
            contents: info.contents,
            start: clickDate,
            end: clickDate,
          },
        ]);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        {/* 스케줄 등록 화면 연결 */}
        {open ? <EventPopup onClose={onClose} /> : null}
        <div className="max-w-3xl w-full shadow-lg">
          <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
            <Calendar
              localizer={localizer}
              events={eventList}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              onSelectSlot={clickSlot}
              selectable
            />
          </div>
          <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-4">
              <div className="border-b pb-4 border-gray-400 border-dashed">
                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  {/* undefined */}
                  {info.date}
                </p>
                <a
                  tabIndex="0"
                  className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                >
                  {info.title}
                </a>
                <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                  {info.contents}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Scheldule;
