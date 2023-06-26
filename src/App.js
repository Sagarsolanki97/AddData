import "./App.css";
import TextField from "@mui/material/TextField";
import Header from "./components/Header";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import Fields from "./components/fields";

// import Button from "@mui/material/Button";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const add = () => {
    if (name.trim() === "" || email.trim() === "") {
      return window.alert(
        "Kya kar raha he Bhai tu sab khaane bhrle shanti se!"
      );
    }

 

    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };   
  
  const removeind = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  return (
    <div className="App">
      <Header />
      <div className="input">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
          />
          <TextField
            onPaste={() =>
              window.alert("likh leta bhai thodi  kasrat hojaati ???")
            }
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
          />

          <Button variant="contained" onClick={add} color="error">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* data show section*/}
      <div className="data-container">
        <div className="data">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            // <Fields name={element.name} email={element.email} index={index} />
            <div key={index} className="data">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button
                onClick={() => removeind(index)}
                variant="contained"
                color="error"
              >
                <DeleteOutlineRoundedIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
