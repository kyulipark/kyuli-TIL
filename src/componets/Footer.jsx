import styled from "styled-components";
import { config } from "../config";
import { useEffect, useState } from "react";

const Footer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("Seoul");

  const key = config.API_KEY;

  useEffect(() => {
    // API 호출
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=kr&appid=${key}&units=metric`
    ) // 예시 URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [location]);

  const displayData = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <p>{data.name}</p>
        <p>{Math.floor(data.main.temp)}°C</p>
        <p>{data.weather[0].description}</p>
      </>
    );
  };

  const changeLocation = (e) => {
    const value = e.target.value;

    console.log(value);
    setLocation(value);
  };

  return (
    <StyledFooter>
      <h4>wheather</h4>
      <div>
        <input
          type="text"
          placeholder="현재 위치를 입력하세요."
          onChange={changeLocation}
        />
        <button>검색</button>
      </div>
      {displayData()}
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vh;
  height: 200px;
  border-radius: 20px;

  color: wheat;
  * {
    margin: 3px;
  }
`;
