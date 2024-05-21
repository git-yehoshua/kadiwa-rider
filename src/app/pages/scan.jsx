import { BrowserMultiFormatReader } from "@zxing/library";
import React, { useRef, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const QRScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const codeReader = new BrowserMultiFormatReader();
  const [scannedData, setScannedData] = useState(null);

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

        return () => {
          stopStream(stream);
          codeReader.reset();
        };
      } catch (error) {
        console.error("Error starting scanner:", error);
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
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
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
          <IoCloseOutline size={30} />
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
