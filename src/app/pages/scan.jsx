import { BrowserMultiFormatReader } from "@zxing/library";
import React, { useRef, useEffect, useState } from "react";

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
    <div className="relative w-full h-screen">
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
      {scannedData && <div>{/* Display scanned data if needed */}</div>}
      <div className="absolute bottom-[10%] left-[50%] z-20 text-white ">
        <span className="font-semibold">Scan code</span>
        <span className="text-sm">
          Align camera and adjust focus to sucessfully scan code
        </span>
      </div>
    </div>
  );
};

export default QRScanner;
