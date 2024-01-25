import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: '',
    color: '',
    transmission: '',
    engine: '',
    fuelType: '',
    price: ''
  });

  useEffect(() => {
    fetch(`https://thimodehaan.com:8080/cars/details/${carId}`, {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => setCar(data))
      .catch(error => console.error(error));
  }, [carId]);

  const handleChange = (event) => {
    setCar({
      ...car,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://thimodehaan.com:8080/cars/details/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(car)
    })
      .then(response => response.json())
      .then(data => {
        navigate(`/details/${carId}`);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="w-1/2 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">Brand:</label>
        <input id="brand" name="brand" value={car.brand} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="model" className="block text-gray-700 text-sm font-bold mb-2">Model:</label>
        <input id="model" name="model" value={car.model} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="year" className="block text-gray-700 text-sm font-bold mb-2">Year:</label>
        <input id="year" name="year" value={car.year} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
        <input id="color" name="color" value={car.color} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="transmission" className="block text-gray-700 text-sm font-bold mb-2">Transmission:</label>
        <select id="transmission" name="transmission" value={car.transmission} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>
      <div className="mb-4">
        <label htmlFor="engine" className="block text-gray-700 text-sm font-bold mb-2">Engine:</label>
        <input id="engine" name="engine" value={car.engine} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="fuelType" className="block text-gray-700 text-sm font-bold mb-2">Fueltype:</label>
        <input id="fuelType" name="fuelType" value={car.fuelType} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price €:</label>
        <input id="price" name="price" value={car.price} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Save
        </button>
        <div className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => window.history.back()}>
            Go Back
        </div>
      </div>
    </form>
    </div>
  );
}

export default Edit;