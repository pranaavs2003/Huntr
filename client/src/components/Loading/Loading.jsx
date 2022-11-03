import React from "react";
import "./loading.scss";
import {SyncLoader} from "react-spinners";

export default function Loading() {
  return(
    <div className="loading">
        <SyncLoader color="#0b0b0b" />
    </div>
  );
}
