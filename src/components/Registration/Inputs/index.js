import React from "react";
import { useField } from "formik";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { CircularProgress } from "@mui/material";
import { Button } from "@mui/material";

export const CustomTextInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="m-3 py-1">
      <TextField
        {...props}
        {...field}
        fullWidth
        error={meta.touched && meta.error ? meta.error : false}
        id={props.name}
        label={props.label}
        helperText={meta.error}
        multiline={props.multiline && true}
        InputLabelProps={{
          style: { color: "grey" },
        }}
        type={props.password && "password"}
      />
    </div>
  );
};

export const CustomYearPicker = (props) => {
  const currentDate = new Date();
  const maxDate = new Date(2021, 1, 1);
  const minDate = new Date(2020, 1, 1);
  const [field, meta] = useField(props);
  return (
    <div className="m-3 py-1 text-black">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          {...props}
          {...field}
          value={props.value}
          onChange={props.onChange}
          views={["year"]}
          minDate={minDate}
          maxDate={maxDate}
          renderInput={(params) => (
            <TextField {...params} fullWidth helperText={null} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};


export const CustomSubmitButton = (props) => {
  return (
    <div className="flex align-items-center justify-center pt-6">
      <Button
        disabled={props.isDisabled}
        variant="contained"
        color="success"
        disableElevation
        endIcon={
          props.isLoading && (
            <CircularProgress style={{ color: "black", right: 0 }} size={25} />
          )
        }
        {...props}
      >
        {props.text}
      </Button>
    </div>
  );
};
export const CustomButtonNoFormik = (props) => {
  return (
    <div className="w-full">
      <TextField
        {...props}
        fullWidth
        id={props.name}
        label={props.labelTwo}
        InputLabelProps={{
          style: { color: "grey" },
        }}
        multiline={props.multiline && true}
      />
    </div>
  );
};
