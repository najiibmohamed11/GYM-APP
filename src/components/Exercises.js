import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);

  useEffect(() => {
    axios.get('https://wger.de/api/v2/exercise/?format=json')
      .then(res => setExercises(res.data.results))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    setFilteredExercises(
      exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, exercises]);

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg text-gray-700 bg-gray-200"
          placeholder="Search for an exercise"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredExercises.map(exercise => (
          
          <div key={exercise.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              
            <img src={exercise.img} alt={exercise.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium">{exercise.name}</h3>
              <p 
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: exercise.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;