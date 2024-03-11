import React from 'react';
import { jwtDecode } from "jwt-decode";

const Token = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFtaXRoIiwiaWQiOjQsImRpc2NvdW50IjoiMjAlIiwiaWF0IjoxNzA4NzY3MjQ2fQ.v6UhrIidqAx3b2fzqd1ii5L3SdvepNDHcnS3eDL502w'
    const decord = jwtDecode(token)
    console.log(decord);
  return (
    <div>
      <h1>decorder</h1>
    </div>
  )
}

export default Token;
