import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function PruebaQR() {

  return (
    <div>
      <QRCode value="http://facebook.github.io/react/" />
    </div>
  )
}