// About section

import React from 'react';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I am a software developer who graduated from Moringa School. I am passionate about web app development, with a strong command of back-end development using Python. My main stacks are React for the front-end and Python for the back-end.
      </p>
      <div className="photo-container">
        <img src="/images/John Image.jpg" alt="Your description" />
        <img src="/images/Logo Python student .png" alt="Your description" />
        {/* Add more images as needed */}
      </div>
    </section>
  );
};

export default About;