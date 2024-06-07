import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import transactionService from "@/app/services/transaction.service";
import BackButton from "@/app/components/buttons/back.button";
import SquareButton from "@/app/components/buttons/square.button";
import HeaderContainer from "@/app/components/layout/header.container";
import ItemContainer from "@/app/components/layout/item.container";

const ConfirmAcceptOrder = () => {
  const { bookingId } = useParams();
  const [item, setItem] = useState(null);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [itemsIndex, setItemsIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchBookingDetails = async () => {
      try {
        const bookingDetails = await transactionService.BOOKING.get(bookingId);
        if (isMounted) {
          setItem(bookingDetails);
          if (bookingDetails) {
            setDisplayedItems(bookingDetails.items.slice(0, 3));
            setItemsIndex(3);
          }
        }
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    };

    if (bookingId) {
      fetchBookingDetails();
    }

    return () => {
      isMounted = false;
    };
  }, [bookingId]);

  const loadMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      const nextItems = item.items.slice(itemsIndex, itemsIndex + 3);
      setDisplayedItems((prevItems) => [...prevItems, ...nextItems]);
      setItemsIndex((prevIndex) => prevIndex + 3);
      setLoading(false);
    }, 1000);
  };

  const handleClick = () => {
    navigate(`/main/${bookingId}/transaction`);
  };

  return (
    <div className="fixed bg-white z-10 inset-0 h-full min-h-screen">
      <HeaderContainer>
        <div className="flex w-full">
          <div className="absolute text-green-600">
            <BackButton onBack={() => navigate(-1)} />
          </div>
          <h1 className="flex w-full items-center justify-center text-green-600 font-semibold">
            Accept Booking
          </h1>
        </div>
      </HeaderContainer>
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center w-full h-[86%]">
          <div
            className="flex items-start justify-center w-full h-[91%] overflow-y-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex flex-col items-center justify-center w-full p-2 gap-2">
              {item ? (
                <>
                  <div className="flex w-full items-start">
                    <h2 className="font-semibold text-base text-start text-gray-800 my-2">
                      Items
                    </h2>
                  </div>
                  <ItemContainer>
                    <div
                      className="text-start overflow-y-scroll h-fit max-h-44 w-full"
                      style={{ scrollbarWidth: "thin" }}
                    >
                      {displayedItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex text-start items-center justify-between  w-full p-2 border-b border-gray-100"
                        >
                          <h1 className="font-semibold text-sm text-gray-800">
                            {item.name}
                          </h1>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.qty}
                          </p>
                        </div>
                      ))}
                    </div>
                    {loading && (
                      <p className="text-[12px] text-gray-500">
                        Loading more items...
                      </p>
                    )}
                    {!loading && displayedItems.length < item.items.length && (
                      <button
                        className="text-[12px] text-start text-blue-600 hover:underline focus:outline-none"
                        onClick={loadMoreItems}
                      >
                        Load More
                      </button>
                    )}
                  </ItemContainer>
                  <ItemContainer>
                    <div className="text-start">
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
            onClick={handleClick}
            text={"Accept Booking"}
            disabled={!item}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmAcceptOrder;
