import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import { RootState } from "../../app/store";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-[300px] h-[500px] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-slate-200 flex items-center justify-between flex-col py-24">
        <h1 className="text-xl"> Welcome to my counter!</h1>
        <div className="w-[100px] h-[100px] rounded-3xl bg-gray-400 flex items-center justify-center">
          <span className="text-3xl">{count}</span>
        </div>

        <div className="flex items-center justify-between flex-col h-[100px]">
          <div className="flex flex-row items-center justify-center w-[220px]">
            <button
              onClick={() => dispatch(increment())}
              className="bg-green-600 w-[40%] h-[40px] rounded-2xl mx-4 hover:bg-green-400 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-300"
            >
              +
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="bg-red-500 w-[40%] h-[40px] rounded-2xl mx-4 hover:bg-red-600 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-300"
            >
              -
            </button>
          </div>
          <div
            onClick={() => dispatch(reset())}
            className="flex flex-row items-center justify-center w-[220px]"
          >
            <button className="bg-blue-500 w-[120px] h-[40px] rounded-2xl mx-4 hover:bg-blue-600 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-300">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
