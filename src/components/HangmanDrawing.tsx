const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-20px",
    }}
  ></div>
);

const Body = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: 0,
    }}
  ></div>
);

const Right_Arm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const Left_Arm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const Right_leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "190px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const Left_leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "190px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const Body_Parts = [Head, Body, Right_Arm, Left_Arm, Right_leg, Left_leg]

type HangmanDrawingProps = {
  numberOfGuesses: number
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {Body_Parts.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "300px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
