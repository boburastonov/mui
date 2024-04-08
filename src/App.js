import "./App.css";
import Btn from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import CheckBox from "@mui/material/Checkbox";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutline";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Btn
        variant="contained"
        color="success"
        endIcon={<SaveIcon style={{ color: "lightcyan" }} />}
        size="medium"
        style={{ color: "red" }}
      >
        Save me!
      </Btn>
      <CheckBox />
      <Btn
        variant="contained"
        endIcon={<RemoveIcon style={{ color: "orange" }} />}
        style={{ textDecoration: "line-through", marginLeft: "10px" }}
        disabled
      >
        Removed!
      </Btn>
    </div>
  );
}

export default App;
