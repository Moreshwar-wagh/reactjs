import {
  ArrowsRightLeftIcon,
  BuildingLibraryIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import SubMenuCard from "./SubMenuCard";
import TransitionCard from "./TransitionCard";
import WelcomeCard from "./WelcomeCard";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="flex justify-center w-full gap-8 m-auto mt-6">
      <div className="flex flex-col flex-1 w-full gap-6">
        <WelcomeCard />
        <SubMenuCard
          titleText={"Transactions"}
          titleIcon={<ArrowsRightLeftIcon className="text-green-600 size-5" />}
          firstTransaction={"3,46,76,434"}
          secondTransaction={"694"}
          firstTransactionName={"Beneficiary transactions"}
          secondTransactionName={"Internal transactions"}
          firstCardName={"Pay"}
          firstCardIcon={<WalletIcon className="size-14" />}
          firstCardDescription={"Create an outgoing transactions"}
          secondCardName={"Receive"}
          secondCardIcon={<WalletIcon className="size-14" />}
          secondCardDescreption={"Create an incoming transactions"}
          thirdCardIcon={<WalletIcon className="size-14" />}
          thirdCardName="Approve"
          thirdCardDescription="Approve creeated transitions"
        />
        <SubMenuCard
          titleText={"Benificiary Accounts"}
          titleIcon={<BuildingLibraryIcon className="text-orange-400 size-5" />}
          firstTransaction={"303"}
          secondTransaction={"03"}
          firstTransactionName={"Pending accounts"}
          secondTransactionName={"Approved accounts"}
          firstCardName={"Create"}
          firstCardIcon={<WalletIcon className="size-14" />}
          firstCardDescription={"Create an benificiary account"}
          secondCardName={"Approve"}
          secondCardIcon={<WalletIcon className="size-14" />}
          secondCardDescreption={"Create an outgoing transactions"}
        />
      </div>
      <div className="bg-[#3a5686] rounded-2xl w-1/3">
        <TransitionCard />
      </div>
    </div>
  );
};

export default HeroSection;
