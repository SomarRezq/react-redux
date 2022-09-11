import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Body.module.css';
import axios from "axios";
import {getReadings} from "../../Redux/Actions/actions";

const Body = () => {
  const readings = useSelector((state) => state.readings.readings);
  const dispatch = useDispatch();
  const fetchReadings = async () => {
  const response = await axios.get("http://localhost:5000/weather").catch((err) => {
        console.log("error: ", err)
    });
    dispatch(getReadings(response.data));
  };
  
  useEffect(() => {
    fetchReadings();
  });

  return(
  <div className={styles.Body}>
    Body
        {readings.map((reading) => {return(
            <div key = {reading.id}>
             <div> {reading.temprature}</div>
             <div>{reading.humidity}</div> 
             <div>{reading.city}</div> 
            </div>
          )
        })}
  </div>
)};

export default Body;
