import { useState } from 'react';
import MyCalendar from "./MyCalendar";
import FoodTable from "./FoodTable";
import ExerciseTable from "./ExerciseTable";
import '../App.css';
  
const Home = () => {
    const [rows, setRows] = useState([]);
    const [rows2, setRows2] = useState([]);

    const [date, setDate] = useState(new Date().toDateString())

    const handleAddFood = (food) => {
        const  newRows = [food, ...rows];
        setRows(newRows);
    }
    const handleAddExercise = (exercise) => {
        const  newRows2 = [exercise, ...rows2];
        setRows2(newRows2);
    }

    return (
        <div>
            <MyCalendar setDate={setDate} />
            <div id="tables">
                <div className="table">
                    <FoodTable rows={rows.filter((row) => row.date === date)} handleAddFood={handleAddFood} date={date} />
                </div>
                <div className="table">
                    <ExerciseTable rows2={rows2.filter((row2) => row2.date === date)} handleAddExercise={handleAddExercise} date={date} />
                </div> 
            </div>
        </div>
    )
}

export default Home;