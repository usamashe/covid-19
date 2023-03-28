import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountries, setFetchedCountries] = useState([]);
  console.log({ fetchCountries });
  const countryNames = fetchCountries.map((c) => c.country);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries());
    };
    fetchCountries();
  }, [setFetchedCountries]);
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue="global"
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {countryNames.map((name) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
