import '../App.css';
import MyCalendar from "./MyCalendar";
import FoodTable from "./FoodTable";
import ExerciseTable from "../ExerciseTable";

const Home = () => {
    return (
        // <Box>
            <div>
                <MyCalendar />
                <div id="tables">
                    <div className="table" id="food">
                        <FoodTable />
                    </div>
                    <div className="table">
                        <ExerciseTable />
                    </div> 
                </div>
            </div>
        // </Box>
    )
}

export default Home;