import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const Select = ({ data, setSelect }: { data: []; setSelect: Function }) => {
  const input: any = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelect(input.current.value));
  }, []);

  return (
    <div className="max-w-[200px]">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Select currency
      </label>
      <select
        ref={input}
        onChange={(e) => dispatch(setSelect(e.target.value))}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={1}>UAH</option>
        {data.map((item: any, index: number) => {
          return (
            <option key={index} value={item.buy}>
              {item.ccy}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
