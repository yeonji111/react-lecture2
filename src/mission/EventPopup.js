import { useCallback } from "react";
import { useState } from "react";

const EventPopup = ({ onClose }) => {
  const [title, setTitle] = useState(""); // 스케줄제목
  const [contents, setContents] = useState(""); // 스케줄내용

  const titleOnChangeHandler = useCallback((e) => {
    setTitle(e.target.value);
  });

  const contentsOnChangeHandler = useCallback((e) => {
    setContents(e.target.value);
  });

  const goSave = () => {
    if (!title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!contents) {
      alert("내용을 입력하세요.");
      return;
    }

    onClose({ close: true, info: { title: title, contents: contents } });
  };
  return (
    <div
      className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      id="modal"
      style={{ marginTop: "10rem" }}
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            스케줄 추가하기
          </h1>
          <label
            htmlFor="title"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            스케줄 제목
          </label>
          <input
            id="title"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="스케줄 제목을 입력하세요"
            onChange={titleOnChangeHandler}
          />

          <label
            htmlFor="contents"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            스케줄 내용
          </label>
          <input
            id="contents"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="스케줄 내용을 입력하세요"
            onChange={contentsOnChangeHandler}
          />

          <div className="flex items-center justify-start w-full">
            <button
              onClick={goSave}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
            >
              등록
            </button>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onClick={() => onClose({ close: false })}
            >
              취소
            </button>
          </div>
          <button
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => onClose({ close: true })}
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventPopup;
