import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";

function ToDo() {
  const [form, setForm] = useState('');
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm(form);
  };

  const RemoveItem = (index) => {
    let arr = data;
    arr.splice(index,1);
    setData([...data])
  }

  return (
    <div className="header">
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(event) => setForm(...form,event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) => setForm(...form,event.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <Stack>
            <Button variant="contained" color="error">
              <DeleteIcon />
            </Button>
          </Stack>
        </div>
        {
        data.map((element, index) => {
          return (
            <div  className="data">
              <div key={index} className="data_val">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                  <Button onClick={() => RemoveItem(index)} variant="contained" color="error">
                    <DeleteIcon />
                  </Button>
                </Stack>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDo;
