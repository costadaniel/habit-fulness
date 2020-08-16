import React, { useEffect, useState } from "react";
import { Container, TimeText, NameText } from "./styles";

export default () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function timerRun() {
    let updatedSeconds = time.seconds + 1;
    let updatedMinutes = time.minutes;
    let updatedHours = time.hours;
    let updatedDays = time.days;

    if (updatedSeconds > 59) {
      updatedSeconds = 0;
      updatedMinutes++;
    }
    if (updatedMinutes > 59) {
      updatedMinutes = 0;
      updatedHours++;
    }
    if (updatedHours > 23) {
      updatedHours = 0;
      updatedDays++;
    }

    setTime({
      days: updatedDays,
      minutes: updatedMinutes,
      seconds: updatedSeconds,
      hours: updatedHours,
    });
  }

  useEffect(() => {
    const interval = setInterval(timerRun, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <Container>
      <TimeText>
        {time.days < 10 && 0}
        {time.days}
      </TimeText>
      <NameText>DAYS</NameText>
      <TimeText>
        {time.hours < 10 && 0}
        {time.hours}
      </TimeText>
      <NameText>HOURS</NameText>
      <TimeText>
        {time.minutes < 10 && 0}
        {time.minutes}
      </TimeText>
      <NameText>MINUTES</NameText>
      <TimeText>
        {time.seconds < 10 && 0}
        {time.seconds}
      </TimeText>
      <NameText>SECONDS</NameText>
    </Container>
  );
};
