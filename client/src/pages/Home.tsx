import { Link } from "react-router-dom";

const HomePage = (): React.JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center flex-col p-6 overflow-auto">
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h1 className="text-xl font-semibold text-green-700">A simple 3-tier rule engine application to determine user eligibility based on attributes like age, department, income, spend.</h1>
          <div className="mt-10 text-md font-semibold text-green-700 grid grid-cols-2 place-items-center gap-5">
            <button className="p-6 border-black border-2 rounded-lg w-6/12 bg-orange-200 place-self-end"><Link to="/create" className="text-blue-900 underline">Create AST</Link></button>
            <button className="p-6 border-black border-2 rounded-lg w-6/12 bg-purple-200 place-self-start"><Link to="/combine" className="text-blue-900 underline">Combine Rules</Link></button>
            <button className="p-6 border-black border-2 rounded-lg w-6/12 bg-green-200 place-self-end"><Link to="/evaluate" className="text-blue-900 underline">Evaluate Data</Link></button>
            <button className="p-6 border-black border-2 rounded-lg w-6/12 bg-blue-200 place-self-start"><Link to="/available-rules" className="text-blue-900 underline">Available Rules</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;