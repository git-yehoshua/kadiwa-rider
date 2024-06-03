import React from "react";
import RoundedWhiteContainer from "../common/modals/containers/rounded.white.container";
import GetDirectionButton from "../buttons/get.directions";
import { toast } from "sonner";
import { truncateText } from "@/utils/helpers/truncate";

const TransactionDetails = ({ transactionData, activeIndex }) => {
  if (!transactionData) return null;

  const isPickup = activeIndex === 0;
  const address = isPickup
    ? transactionData.merchant.address
    : transactionData.customer.address;
  const truncatedAddress = address ? truncateText(address, 60) : "No address";

  // Dummy paymentOption and amount for now
  const paymentOption = "Cash on Delivery";
  const amount = transactionData.items
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

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
            {paymentOption} • ₱ {amount}
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
