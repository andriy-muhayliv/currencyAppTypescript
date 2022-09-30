import { InitState } from "../../interfaces";

const Header = ({ data }: any) => {
  return (
    <>
      <div className="grid gap-2 py-2">
        <p>Based on UAH</p>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          {data &&
            data.map((item: any, index: number) => {
              return (
                <ul
                  key={index}
                  className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white hover:scale-105 hover:drop-shadow-xl duration-150 ease-in-out"
                >
                  <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    {item.ccy}
                  </li>
                  <li className="w-full px-4 py-2 rounded-b-lg">
                    buy: {item.buy}
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                    sale: {item.sale}
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Header;
