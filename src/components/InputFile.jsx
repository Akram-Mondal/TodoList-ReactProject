import { useState } from "react";

const InputFile = () => {
  const [activaty, setactivaty] = useState("");
  const [listData, setListData] = useState([]);

  const addList = () => {
    // setListData([...listData, activaty])
    // console.log(listData)
    setListData((listData) => {
      const updatedList = [...listData, activaty];
      setactivaty("");
      return updatedList;
    });
  };

  const removeErmList = (i) => {
    const updateListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updateListData);
  };

  const removeAll = () => {
    setListData([]);
  };

  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50 ">
        <form>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900 ">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
              <div className="col-span-full sm:col-span-3 ">
                <input
                  value={activaty}
                  onChange={(e) => setactivaty(e.target.value)}
                  id="firstname"
                  type="text"
                  placeholder="Add Todos"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900  px-4 py-4"
                />
              </div>

              <button
                onClick={addList}
                type="button"
                className=" border rounded-md dark:border-gray-100 col-span-full sm:col-span-3 text-xl"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
      <div>
        {listData != [] &&
          listData.map((data, i) => (
            <div
              key={i}
              className="flex justify-between w-11/12 mx-auto mt-4 bg-slate-100 rounded-lg pl-4"
            >
              <p className="text-lg">{data}</p>
              <button
                onClick={() => removeErmList(i)}
                className="bg-slate-800 px-6 py-2 text-white rounded-lg "
              >
                Remove
              </button>
            </div>
          ))}
      </div>
      {listData.length > 1 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={removeAll}
            className="bg-slate-800 px-6 py-2 text-white rounded-lg "
          >
            RemoveAll
          </button>
        </div>
      )}
    </div>
  );
};

export default InputFile;
