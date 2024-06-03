import { BrowserMultiFormatReader } from "@zxing/library";
import React, { useRef, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const QRScanner = ({ onScan, onClose }) => {
  const videoRef = useRef(null);
  const codeReader = new BrowserMultiFormatReader();
  const [scannedData, setScannedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startScanner = async () => {
      try {
        const stream = await getStream();

        await codeReader.listVideoInputDevices();

        codeReader.decodeFromConstraints(
          getVideoConstraints(),
          videoRef.current,
          handleDecodeResult,
          { formats: ["QR_CODE", "CODE_128"] }
        );

        setLoading(false); // Set loading to false once the scanner is ready

        return () => {
          stopStream(stream);
          codeReader.reset();
        };
      } catch (error) {
        console.error("Error starting scanner:", error);
        setLoading(false); // Ensure loading is set to false in case of an error
      }
    };

    startScanner();
  }, [onScan]);

  const getStream = async () => {
    try {
      return await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } },
      });
    } catch (error) {
      return await navigator.mediaDevices.getUserMedia({ video: true });
    }
  };

  const getVideoConstraints = () => ({
    video: { facingMode: "environment" },
    audio: false,
  });

  const handleDecodeResult = async (result, error) => {
    if (result) {
      const userCode = JSON.parse(result.getText());
      console.log("Scanned data:", userCode);
      setScannedData(userCode);
      onScan(userCode);
    }
    if (error) {
      console.error("Error scanning:", error);
    }
  };

  const stopStream = (stream) => {
    if (stream && stream.getTracks) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <div className="fixed z-[9999] w-full h-screen flex flex-col items-center justify-center bg-black">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <span className="text-white text-lg">Loading Scanner...</span>
        </div>
      )}
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
      {scannedData && <div>{/* Display scanned data here */}</div>}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <span className="absolute top-[25%] font-semibold text-white">
          Scan code
        </span>
        <span className="fixed text-white top-5 right-5">
          <button
            className="p-2 bg-transparent rounded-full transition-all duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-50"
            onClick={onClose}
          >
            <IoCloseOutline size={30} />
          </button>
        </span>
        <div className="relative w-64 h-64">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-3xl"></div>
        </div>
      </div>

      <div className="absolute z-20 text-white bottom-10 w-full text-center">
        <div className="flex flex-col">
          <span className="text-sm animate-pulse">
            Align camera and adjust focus to successfully scan code
          </span>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
