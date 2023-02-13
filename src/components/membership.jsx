import formattedDateString from "../common/formattedDate.js";

const Membership = ({ data }) => {
  const { membershipNumber, memberSwitchFrom, dateCompleted } = data;
  return (
    <div className="shadow sm:overflow-hidden sm:rounded-md bg-white w-64">
      <div className="border-b py-4 px-6 flex place-content-between text-sm">
        <p className="text-slate-600">Membership:</p>
        <p className="uppercase">{membershipNumber}</p>
      </div>
      <div className="border-b py-4 px-6 flex place-content-between text-sm">
        <p className="text-slate-600">Switch from:</p>
        <p className="uppercase">{memberSwitchFrom}</p>
      </div>
      <div className="py-4 px-6 flex place-content-between text-sm">
        <p className="text-slate-600">Date completed:</p>
        <p className="uppercase">{formattedDateString(dateCompleted)}</p>
      </div>
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-8">
        <button
          type="submit"
          className="rounded-md border border-gray-300 bg-white py-1 px-2 text-xs font-medium leading-5 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:bg-gray-50"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
export default Membership;
