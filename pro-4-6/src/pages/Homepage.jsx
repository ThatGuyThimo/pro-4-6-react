import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Car = () => {
  const [carList, setCarList] = useState([]);
  const [pagination, setPagination] = useState();
  const [page, setPage] = useState('https://thimodehaan.com:8080/cars?start=1&limit=10');

  useEffect(() => {
  getCars();
  }, []);
  const getCars = async () => {
    try {
      const response = await fetch(
        page,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setCarList(data.items);
      setPagination(await data.pagination);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  const getPagination = () => {
    return pagination;
  }


  if (!carList.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div className=" bg-[#333333] text-black flex flex-wrap justify-around p-10">
      {carList.map((car) => (
        <div className="w-60 p-6 bg-white shadow-lg rounded-lg m-4" key={car._id}>
          <h1 className="text-xl font-bold mb-2">
            {car.brand} {car.model}
          </h1>
          <p className="mb-2">Year: {car.year}</p>
          <hr />
          <p className="mb-2">Fuel: {car.fuelType}</p>
          <hr />
          <p className="mb-2">Color: {car.color}</p>
          <hr />
          <div className="flex flex-row justify-between mt-4">
            <Link to={`/details/${car._id}`} className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md text-white">Details</Link>
            <Link to={`/edit/${car._id}`} className="bg-orange-500 hover:bg-orange-700 px-4 py-2 rounded-md text-white">Edit</Link>
          </div>
        </div>
      ))}
    </div>
      <div className="flex justify-center items-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white mx-2 px-4 py-2 mt-4 rounded-md" onClick={() => {setPage(getPagination()._links.first.href); getCars(); } }>First</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white mx-2 px-4 py-2 mt-4 rounded-md" onClick={() => {setPage(getPagination()._links.next.href); getCars(); }}>Next</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white mx-2 px-4 py-2 mt-4 rounded-md" onClick={() => {setPage(getPagination()._links.previous.href); getCars(); }}>Prev</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white mx-2 px-4 py-2 mt-4 rounded-md" onClick={() => {setPage(getPagination()._links.last.href); getCars(); }}>Last</button>
      </div>
    </div>
  );
};

export default Car;