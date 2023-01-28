import React from "react";

function Welcome() {
  return (
    <div className="bg-[#1C1C1C] pr-9 pl-9 pt-4 pb-4 rounded-xl flex justify-between">
      <div className="flex flex-col">
        <h1 className="text-7xl leading-tight mb-8">
          Welcome <br /> to my <br /> blog 👋🏾
        </h1>
        <div className="font-roboto text-xl font-light">
          <p>
            I am a frontend developer by
            <br /> profession, but I also have a passion for gaming <br /> and playing the guitar in my free time.
          </p>
          <br />
          <p>
            Here you will find my thoughts on the latest industry trends,
            <br /> tips and tricks for frontend development.
          </p>
        </div>
      </div>
      <div>{/* <Image src={profilePic} alt="Picture of author" width={350} height={300} className="rounded-xl" /> */}</div>
    </div>
  );
}

export default Welcome;
