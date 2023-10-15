{/*import React from 'react';

const SuitableTime = ({ meetings, cinemaSchedule }) => {
  const sortedMeetings = meetings.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
  const sortedCinemaSchedule = cinemaSchedule.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));

  const suitableTime = findSuitableTime(sortedMeetings, sortedCinemaSchedule);

  return (
    <div>
      <h2>Suitable Time to visit cinema</h2>
      {suitableTime ? (
        <p>
          A suitable time slot between meetings and cinema schedule is from{' '}
          {suitableTime.start_time} to {suitableTime.end_time}
        </p>
      ) : (
        <p>No suitable time slot found.</p>
      )}
    </div>
  );
};

const findSuitableTime = (meetings, cinemaSchedule) => {
  let suitableTime = null;
  for (let i = 0; i < meetings.length - 1; i++) {
    const meetingEndTime = new Date(meetings[i].end_time);
    const nextMeetingStartTime = new Date(meetings[i + 1].start_time);

    const gapStartTime = meetingEndTime;
    const gapEndTime = nextMeetingStartTime;

    if (gapStartTime < gapEndTime) {
      const isOverlap = cinemaSchedule.some((schedule) => {
        const scheduleStartTime = new Date(schedule.start_time);
        const scheduleEndTime = new Date(schedule.end_time);
        return (
          (gapStartTime >= scheduleStartTime && gapStartTime < scheduleEndTime) ||
          (gapEndTime > scheduleStartTime && gapEndTime <= scheduleEndTime)
        );
      });

      if (!isOverlap) {
        suitableTime = {
          start_time: gapStartTime.toISOString(),
          end_time: gapEndTime.toISOString(),
        };
        break;
      }
    }
  }

  return suitableTime;
};

export default SuitableTime;*/}