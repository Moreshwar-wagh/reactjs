"use client";
import {
  ArrowsRightLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { ReactElement, useState } from "react";

interface SubMenuCardProps {
  titleText?: string;
  titleIcon?: ReactElement;
  firstTransaction?: string;
  secondTransaction?: string;
  firstTransactionName?: string;
  secondTransactionName?: string;
  firstCardName?: string;
  firstCardIcon?: ReactElement;
  firstCardDescription?: string;
  secondCardName?: string;
  secondCardIcon?: ReactElement;
  secondCardDescreption?: string;
  thirdCardName?: string;
  thirdCardIcon?: ReactElement;
  thirdCardDescription?: string;
}

const SubMenuCard: React.FC<SubMenuCardProps> = ({
  titleText,
  titleIcon,
  firstTransaction,
  secondTransaction,
  firstTransactionName,
  secondTransactionName,
  firstCardName,
  firstCardIcon,
  firstCardDescription,
  secondCardName,
  secondCardIcon,
  secondCardDescreption,
  thirdCardName,
  thirdCardIcon,
  thirdCardDescription,
}) => {
  const [changeState, setChangeState] = useState(false);

  return (
    <div className="bg-[#506994] rounded-2xl">
      <div className="flex items-center justify-between bg-[#244277] rounded-tl-2xl rounded-tr-2xl">
        <div className="flex items-center pl-4 gap-2">
          {titleIcon}
          <p className="text-white text-sm">{titleText}</p>
        </div>
        <button className="flex items-center justify-center gap-1 text-white text-xs bg-[#314d7e] p-3 rounded-tr-2xl">
          View All <ChevronRightIcon className="size-3" />
        </button>
      </div>
      <div className="grid grid-cols-4 justify-center items-stretch">
        <div className="bg-[#3a5686] rounded-bl-2xl p-8 px-9">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 text-white">
              <p className="text-lg font-medium">{firstTransaction}</p>
              <p className="text-xs text-gray-100 font-light">
                {firstTransactionName}
              </p>
            </div>
            <div className="flex flex-col gap-1 text-white">
              <p className="text-lg font-medium">{secondTransaction}</p>
              <p className="text-xs text-gray-100 font-light">
                {secondTransactionName}
              </p>
            </div>
          </div>
        </div>
        {changeState ? (
          <>
            <div
              className="flex flex-col justify-center border-r-2 border-[#244277] items-center text-center gap-2 text-white p-8 my-4 px-8"
              onClick={() => {
                setChangeState(false);
              }}
            >
              <div className="p-4 bg-[#1b3d6c] rounded-full">
                {firstCardIcon}
              </div>
              <p className="text-xl font-medium">{firstCardName}</p>
              <p className="text-[10px] text-gray-100 font-light">
                {firstCardDescription}
              </p>
            </div>
            <div className="flex flex-col justify-center border-r-2 border-[#244277] items-center text-center gap-2 text-white p-8 my-4 px-8">
              <div className="p-4 bg-[#1b3d6c] rounded-full">
                {secondCardIcon}
              </div>
              <p className="text-xl font-medium">{secondCardName}</p>
              <p className="text-[10px] text-gray-100 font-light">
                {secondCardDescreption}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-2 text-white p-8 my-4 px-8">
              {thirdCardIcon && (
                <>
                  <div className="p-4 bg-[#1b3d6c] rounded-full">
                    {thirdCardIcon}
                  </div>
                  <p className="text-xl font-medium">{thirdCardName}</p>
                  <p className="text-[10px] text-gray-100 font-light">
                    {thirdCardDescription}
                  </p>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="relative flex flex-col justify-start border-r-2 border-[#244277] items-center text-center gap-2 text-white p-8 my-4 px-8">
              <button
                type="submit"
                onClick={() => {
                  setChangeState(true);
                }}
                className="flex items-center justify-center gap-1 text-white text-xs bg-[#314d7e] p-3 rounded-br-2xl absolute top-0 mt-[-16px] self-start ml-[-33px]"
              >
                <ChevronLeftIcon className="size-3" /> Pay
              </button>
              <p className="text-[10px] text-gray-100 font-light m-auto">
                Select the transition type you want to create
              </p>
            </div>
            <div className="flex flex-col justify-center border-r-2 border-[#244277] items-center text-center gap-2 text-white p-8 my-4 px-8">
              <div className="p-4 bg-[#1b3d6c] rounded-full">
                {secondCardIcon}
              </div>
              <p className="text-xl font-medium">Benificiary</p>
              <p className="text-[10px] text-gray-100 font-light">
                Select category and pay a beneficiary
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-2 text-white p-8 my-4 px-8">
              <div className="p-4 bg-orange-500 rounded-full">
                <ArrowsRightLeftIcon className="size-14 " />
              </div>
              <p className="text-xl font-medium">Internal</p>
              <p className="text-[10px] text-gray-100 font-light">
                {thirdCardDescription}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SubMenuCard;
