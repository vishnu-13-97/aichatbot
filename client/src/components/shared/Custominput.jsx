import { TextField } from "@mui/material";

const Custominput = ({ type, name, label ,value,onChange}) => {
  return (
    <TextField
      type={type}
      name={name}
      label={label}
      value={value}        // ✅ controlled value
      onChange={onChange}
      variant="standard"   
      fullWidth
      margin="normal"
      InputProps={{
        disableUnderline: false,
      }}
      sx={{
        input: { color: "white" }, 
        "& .MuiInputLabel-root": {
          color: "white", 
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "white",
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "white", 
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: "white", 
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "white", 
        },
      }}
    />
  );
};

export default Custominput;
