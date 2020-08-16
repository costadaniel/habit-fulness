import React, { useEffect, useState } from "react";
import { Container, TimeText, NameText } from "./styles";

export default () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <Container>
      <TimeText>{days > 0 ? days : "0" + String(days)}</TimeText>
      <NameText>DAYS</NameText>
      <TimeText>{hours > 0 ? hours : "0" + String(hours)}</TimeText>
      <NameText>HOURS</NameText>
      <TimeText>{minutes > 0 ? minutes : "0" + String(minutes)}</TimeText>
      <NameText>MINUTES</NameText>
      <TimeText>{seconds > 0 ? seconds : "0" + String(seconds)}</TimeText>
      <NameText>SECONDS</NameText>
    </Container>
  );
};
