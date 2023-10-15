export function find_result(meetingIntervals, cinemaIntervals) {
  const result = [];

  for (const meetingInterval of meetingIntervals) {
    for (const cinemaInterval of cinemaIntervals) {
      const meetingStartTime = new Date(meetingInterval.start_time).getTime();
      const meetingEndTime = new Date(meetingInterval.end_time).getTime();
      const cinemaStartTime = new Date(cinemaInterval.start_time).getTime();
      const cinemaEndTime = new Date(cinemaInterval.end_time).getTime();

      if (
        meetingStartTime >= cinemaEndTime ||
        meetingEndTime <= cinemaStartTime
      ) {
        result.push({
          meetingInterval,
          cinemaInterval,
        });
      }
    }
  }

  return result;
}
