import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function Details() {
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

  const deleteCar = async () => {
    await fetch(`https://thimodehaan.com:8080/cars/deletecar/${carId}`, {
      method: 'DELETE',
      headers: {
        Accept: "application/json"
      }
    }).then()
    .catch(error => console.error(error));
      navigate('/');
  };


  if (!car) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4">{car.brand} {car.model}</h1>
        <hr />
        <p>Year: {car.year}</p>
        <hr />
        <p>Color: {car.color}</p>
        <hr />
        <p>Transmission: {car.transmission}</p>
        <hr />
        <p>Engine: {car.engine}</p>
        <hr />
        <p>Fuel Type: {car.fuelType}</p>
        <hr />
        <p>Price €: {car.price}</p>
        <hr />
        <div className='flex justify-between'>
            <div className='flex justify-start'>
                <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 mt-4 rounded-md" onClick={deleteCar}>Delete</button>
                <Link to={`/edit/${car._id}`} className="bg-orange-500 hover:bg-orange-700 px-5 py-2 ml-5 mt-4 rounded-md text-white">Edit</Link>
            </div>
            <div className='flex justify-end'>                
                <button className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline" onClick={() => window.history.back()}>
                    Go Back
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Details;