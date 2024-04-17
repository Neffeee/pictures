"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Inputti from "../components/Inputti";
import PictureList from "../components/PictureList";
import SingleImg from "../components/SingleImg";
import { IMAGES_INFO } from "../data";

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState(IMAGES_INFO);
  const [searchTerm, setSearchTerm] = useState('');

  const filterDataByCategory = (category) => {
    if (category === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredData(filtered);
    }
    setSelectedCategory(category);
  };
  // it handles the change in the searchinput puts changing value to setSearchTerm state
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    // Filters the data that comes and includes checks if the given data is found inthe item.category
    const filtered = data.filter(item => 
      item.category.toLowerCase().includes(term));
      setFilteredData(filtered)
  }
  useEffect(() => {
    // Sets category to "All", so the filteredDataByCategory function loads "All" at first.
    filterDataByCategory('All'); 
  }, []);
  return (
    <div className="mx-10 my-10">
      <div className="flex-col flexCenter">
        <div className="pb-2 flexCenter flex-col">
          <h1 className="text-3xl  tracking-wider md:text-5xl">Pictures</h1>
          <h1 className="tracking-widest">"Some fine pics!"</h1>
        </div>
        <div className="py-5">
          <input
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            className="w-[250px] sm:w-[350px] h-8 rounded-md border p-2"
          />
        </div>
        <div className="gap-2  justify-between  grid grid-cols-2 sm:grid-cols-4">
          {["All", "Logos", "Lakes", "Landscapes", "Mountains"].map((category) => (
            <button
              key={data.category}
              className="btnStyle"
              onClick={() => filterDataByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div>
          <div className="flexCenter mt-7 text-2xl" >{selectedCategory && <h1>{selectedCategory}</h1>}</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {filteredData.map((item) => (
              <div key={item.alt}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <PictureList data={data} filteredData={filteredData}/> */}
      </div>
    </div>
  );
};

export default page;
