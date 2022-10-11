import MyTable from "./FoodTable";
import '../App.css';
import { Box } from "@material-ui/core";
import MyCalendar from "./MyCalendar";
import FoodTable from "./FoodTable";

const Home = () => {
    return (
        // <Box>
            <div>
                <MyCalendar />
                <FoodTable />
            </div>          
        // </Box>
    )
}

export default Home;