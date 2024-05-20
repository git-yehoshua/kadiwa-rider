import React from "react";
import RoundedWhiteContainer from "../common/modals/containers/rounded.white.container";
import { transactionData } from "@/app/config/test.config";
import { truncateText } from "@/utils/helpers/truncate";
import GetDirectionButton from "../buttons/get.directions";
import { toast } from "sonner";

const TransactionDetails = () => {
  const { address, paymentOption, amount } = transactionData;
  const truncatedAddress = truncateText(address, 50);

  const handleTest = () => {
    toast.info("This feature is coming soon!");
  };

  return (
    <div className="flex w-full bg-gray-100">
      <RoundedWhiteContainer>
        <div className="flex flex-col w-full items-start justify-start">
          <span className="text-gray-800 font-semibold">
            {truncatedAddress}
          </span>
          <div className="flex text-gray-800 text-sm font-semibold p-1 gap-1">
            {paymentOption} • {amount}
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <GetDirectionButton onClick={handleTest} />
          </div>
        </div>
      </RoundedWhiteContainer>
    </div>
  );
};

export default TransactionDetails;
