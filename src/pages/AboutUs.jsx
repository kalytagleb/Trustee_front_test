import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <h3 style={{textAlign: "center", marginTop: '15px'}}>
        This application was created as a test task for Trustee. It helps to
        choose a time to visit the cinema.
        <p style={{textAlign: "center", marginTop: '20px'}}>
          Our application contains 4 pages. The first page "About us" describes
          the essence of the task. The second "Appointments" page contains a
          schedule of appointments that the user enters. The user specifies the
          name of the meeting, the beginning and the end in time equivalent. It
          can also sort the list by: alphabetical order, start time, and end
          time (when the meeting should end). To create a new note, click on the
          "Create new task" button. The third page provides similar
          functionality, creating a new movie entry. And on the fourth - the
          result (a favorable time at which the user will be able to visit the
          cinema). The application is created in the style of Single Page
          Application. In addition to React, the following technologies are also
          used SCSS (CSS-preprocessor) and an additional
          library React-router-dom.
        </p>
      </h3>
    </div>
  );
};

export default AboutUs;
