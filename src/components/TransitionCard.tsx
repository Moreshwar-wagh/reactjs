import {
  ArrowPathIcon,
  BuildingOffice2Icon,
  CalendarDateRangeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface TransitionCardProps {}

const TransitionCard: React.FC<TransitionCardProps> = () => {
  const detailsList = [
    {
      accNo: "7874 **** 0892",
      amount: "₹ 12,22,000.00",
      updated: 25,
    },
    {
      accNo: "7874 **** 0892",
      amount: "₹ 12,22,000.00",
      updated: 25,
    },
    {
      accNo: "7874 **** 0892",
      amount: "₹ 12,22,000.00",
      updated: 25,
    },
    {
      accNo: "7874 **** 0892",
      amount: "₹ 12,22,000.00",
      updated: 25,
    },
    {
      accNo: "7874 **** 0892",
      amount: "₹ 12,22,000.00",
      updated: 25,
    },
    {
      accNo: "7874 **** 0892",
      amount: "₹ 12,22,000.00",
      updated: 25,
    },
  ];
  return (
    <div className="">
      <div className="flex items-center justify-center w-full cursor-pointer">
        <div className="flex items-center justify-center gap-1 p-4 w-full">
          <BuildingOffice2Icon className="size-5 text-white" />
          <p className="text-white text-xs">Entity Details</p>
        </div>
        <div className="flex items-center justify-center gap-1 p-4 w-full bg-[#244277] rounded-tr-2xl">
          <CalendarDateRangeIcon className="size-5 text-white" />
          <p className="text-white text-xs">Upcoming bank holidays</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <p className="text-xl font-semibold text-white pb-1">
            Q2pat Technologies Pvt. Ltd.
          </p>
          <p className="text-gray-100 text-xs font-light">Entity Name</p>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-200 pb-1">
            <span className="text-lg text-green-500">₹ 120.89</span> in{" "}
            <span className="text-lg text-green-500">456</span> accounts
          </p>
          <p className="text-gray-100 text-xs font-light">
            Total balance - in crores
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#314d7e] border-b-2 border-[#244277]">
        <p className="text-white p-2 text-base px-6">Balance Summary</p>
        <button className="flex items-center justify-center gap-1 text-white text-xs bg-[#506994] p-5">
          View All <ChevronRightIcon className="size-3" />
        </button>
      </div>
      <div className="m-4">
        {detailsList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between shadow-xl rounded-2xl mb-4"
            >
              <div className="flex justify-between items-center w-full px-4">
                <div className="">
                  <p className="text-lg text-green-500 pb-1">{item?.accNo}</p>
                  <p className="text-xs text-gray-200 font-light">
                    Account number
                  </p>
                </div>
                <div>
                  <p className="text-lg text-green-500 pb-1">{item?.amount}</p>
                  <p className="text-xs text-gray-200 font-light text-center">
                    Balance - {item?.updated} min ago
                  </p>
                </div>
              </div>
              <div className="bg-[#506994] p-3 py-5 items-end rounded-tr-2xl rounded-br-2xl">
                <ArrowPathIcon className="size-5 text-white" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransitionCard;
