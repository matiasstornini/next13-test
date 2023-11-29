import React from "react";
import Container from "@mui/material/Container";
import GetMatchs from "../components/GetMatchs";
import Typography from "@mui/material/Typography";

export default (props: any) => {
  const { todos } = props;
  const uniqueMessage = todos && todos.length > 0 ? todos[0].c[11].v : null;

  const gradientTitleStyles = {
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundImage: "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
    backgroundSize: "600% 100%",
    animation: "gradientAnimation 10s linear infinite",
  };

  const gradientAnimationStyles = {
    backgroundPosition: "0% 50%",
  };

  return (
    <Container maxWidth="sm">
      {todos === null ? (
        <Typography>Cargando...</Typography>
      ) : (
        <div>
          {uniqueMessage !== "null" && (
            <h1 style={gradientTitleStyles}>{uniqueMessage}</h1>
          )}
          {todos.map((row: any, index: any) => (
            <div key={index}>
              <GetMatchs {...row} />
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </Container>
  );
};
