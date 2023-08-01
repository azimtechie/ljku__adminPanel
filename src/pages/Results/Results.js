import React, { useState } from "react";
import { Radio, Select, Space } from "antd";

const options = [
  { value: "sem-1", lable: "sem-1" },
  { value: "sem-2", lable: "sem-2" },
  { value: "sem-3", lable: "sem-3" },
];
const Results = () => {
  const handleChange = () => {
    console.log("test");
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-8 gap-y-6 mx-4">
        <div className="col-span-8">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <h1 className="font-bold mt-3 mb-3">Exam :</h1>
              <h1 className="font-bold my-5">Name :</h1>
              <h1 className="font-bold my-5">Enrollment No. :</h1>
              <h1 className="font-bold my-5">Declared On :</h1>
              <h1 className="font-bold my-5">Branch :</h1>
            </div>
            <div className="col-span-6">
              <Select
                mode="single"
                size="middle"
                placeholder="Please select"
                defaultValue="Select Exam"
                onChange={handleChange}
                style={{
                  width: "100%",
                }}
                options={options}
              />
              <h3 className="font-light my-5">PATHAN AZIMKHAN FAIZULLAHKHAN</h3>
              <h3 className="font-light my-5">186400309082</h3>
              <h3 className="font-light my-5">11 Feb 2022</h3>
              <h3 className="font-light my-5">ELECTRICAL ENGINEERING</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
