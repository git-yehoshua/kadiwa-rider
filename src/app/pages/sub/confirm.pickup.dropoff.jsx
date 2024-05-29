import BackButton from "@/app/components/buttons/back.button";
import SquareButton from "@/app/components/buttons/square.button";
import HeaderContainer from "@/app/components/layout/header.container";
import ItemContainer from "@/app/components/layout/item.container";
import { sampleItem } from "@/app/config/test.config";
import React from "react";

const ConfirmPickupDropoff = ({ item = sampleItem, onBack }) => {
  const buttonText =
    item?.type === "pickup"
      ? "Confirm Pickup"
      : item?.type === "dropoff"
      ? "Confirm Dropoff"
      : "No Item";

  return (
    <div className="fixed bg-white z-10 inset-0 h-full">
      <HeaderContainer>
        <div className="flex w-full">
          <div className="absolute text-green-600">
            <BackButton onBack={onBack} />
          </div>
          <h1 className="flex w-full items-center justify-center text-green-600 font-semibold">
            Confirm Item
          </h1>
        </div>
      </HeaderContainer>
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center w-full h-[86%]">
          <div
            className="flex items-start justify-center w-full h-[91%] overflow-y-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex flex-col items-center justify-center w-full p-2">
              {item ? (
                <>
                  <ItemContainer>
                    <div className="text-start">
                      <h1 className="font-semibold text-base text-gray-800">
                        {item.name}
                      </h1>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                      <hr className="my-4" />
                      {/* Merchant Information */}
                      <div className="mt-4">
                        <h2 className="font-semibold text-base text-gray-800">
                          Merchant Information
                        </h2>
                        <p className="text-sm text-gray-500">
                          Name: {item.merchant.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Address: {item.merchant.address}
                        </p>
                        <p className="text-sm text-gray-500">
                          Phone: {item.merchant.phone}
                        </p>
                      </div>
                      <hr className="my-4" />
                      {/* Customer Information */}
                      <div className="mt-4">
                        <h2 className="font-semibold text-base text-gray-800">
                          Customer Information
                        </h2>
                        <p className="text-sm text-gray-500">
                          Name: {item.customer.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Address: {item.customer.address}
                        </p>
                        <p className="text-sm text-gray-500">
                          Phone: {item.customer.phone}
                        </p>
                      </div>
                    </div>
                  </ItemContainer>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="font-semibold text-base text-gray-800">
                      Item Details
                    </h1>
                    <p className="text-sm text-gray-500">No items available</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full bottom-2">
        <div className="flex w-full items-center justify-center p-4">
          <SquareButton
            onClick={() => alert(buttonText)}
            text={buttonText}
            disabled={!item}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmPickupDropoff;
