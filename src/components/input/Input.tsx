import { useDispatch } from "react-redux";
const Input = ({
  dispatchOnchange,
  value,
}: {
  dispatchOnchange: Function;
  value: string;
}) => {
  const dispatch = useDispatch();
  return (
    <input
      onChange={(e) => dispatch(dispatchOnchange(e.target.value))}
      value={value}
      type="number"
      className="mt-4 max-w-[200px] form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="type only numbers"
    />
  );
};

export default Input;
