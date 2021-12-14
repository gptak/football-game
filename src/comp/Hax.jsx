import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import "./Hax.css";

const Hax = () => {
  const [goalACounter, setGoalACounter] = useState(0);
  const [goalBCounter, setGoalBCounter] = useState(0);

  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  let Engine = Matter.Engine;
  let Runner = Matter.Runner;
  let Render = Matter.Render;
  let Events = Matter.Events;
  let World = Matter.World;
  let Bodies = Matter.Bodies;
  let Body = Matter.Body;
  let engine = Engine.create({});
  engine.gravity.y = 0;

  const width = 1500;
  const height = 800;
  const goalHeight = height / 4;
  const postDiameter = 10;

  const playerA = Bodies.circle(200, height / 2, 20, {
    restitution: 0,
    render: {
      fillStyle: "blue",
    },
  });

  const playerB = Bodies.circle(width - 200, height / 2, 20, {
    restitution: 0,
    render: {
      fillStyle: "red",
    },
  });

  const ball = Bodies.circle(width / 2, height / 2, 15, {
    restitution: 0.5,
    render: {
      fillStyle: "white",
    },
  });

  const playerAGoal = Bodies.rectangle(10, height / 2, 20, goalHeight, {
    isSensor: true,
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  });

  const playerBGoal = Bodies.rectangle(width - 10, height / 2, 20, goalHeight, {
    isSensor: true,
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  });

  const post1 = Bodies.circle(40, (height - goalHeight) / 2, postDiameter, {
    isStatic: true,
    render: {
      fillStyle: "black",
    },
  });

  const post2 = Bodies.circle(40, (height + goalHeight) / 2, postDiameter, {
    isStatic: true,
    render: {
      fillStyle: "black",
    },
  });

  const post3 = Bodies.circle(
    width - 40,
    (height - goalHeight) / 2,
    postDiameter,
    {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    }
  );

  const post4 = Bodies.circle(
    width - 40,
    (height + goalHeight) / 2,
    postDiameter,
    {
      isStatic: true,
      render: {
        fillStyle: "black",
      },
    }
  );

  const wallUp = Bodies.rectangle(width / 2, height + 50, width, 100, {
    restitution: 0,
    isStatic: true,
  });

  const wallDown = Bodies.rectangle(width / 2, -50, width, 100, {
    restitution: 0,
    isStatic: true,
  });

  const wallLeft = Bodies.rectangle(-50, height / 2, 100, height + 200, {
    restitution: 0,
    isStatic: true,
  });

  const wallRight = Bodies.rectangle(
    width + 50,
    height / 2,
    100,
    height + 200,
    {
      restitution: 0,
      isStatic: true,
    }
  );

  const band1 = Bodies.rectangle(
    0,
    (height - goalHeight) / 4,
    80,
    (height - goalHeight) / 2,
    {
      restitution: 0,
      isStatic: true,
      render: {
        fillStyle: "green",
      },
    }
  );
  const band2 = Bodies.rectangle(
    0,
    (3 * height + goalHeight) / 4,
    80,
    (height - goalHeight) / 2,
    {
      restitution: 0,
      isStatic: true,
      render: {
        fillStyle: "green",
      },
    }
  );
  const band3 = Bodies.rectangle(
    width,
    (height - goalHeight) / 4,
    80,
    (height - goalHeight) / 2,
    {
      restitution: 0,
      isStatic: true,
      render: {
        fillStyle: "green",
      },
    }
  );
  const band4 = Bodies.rectangle(
    width,
    (3 * height + goalHeight) / 4,
    80,
    (height - goalHeight) / 2,
    {
      restitution: 0,
      isStatic: true,
      render: {
        fillStyle: "green",
      },
    }
  );

  useEffect(() => {
    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: width,
        height: height,
        background: "lightGreen",
        wireframes: false,
      },
    });

    World.add(engine.world, [
      wallUp,
      wallDown,
      wallLeft,
      wallRight,
      playerAGoal,
      playerBGoal,
      band1,
      band2,
      band3,
      band4,
      post1,
      post2,
      post3,
      post4,
      playerA,
      playerB,
      ball,
    ]);

    Runner.run(engine);
    Render.run(render);
  });

  // players movement and shooting

  const moveForce = 0.0003;
  const shootForce = 0.001;

  const keyHandlers = {
    KeyD: () => {
      Body.applyForce(
        playerA,
        {
          x: playerA.position.x,
          y: playerA.position.y,
        },
        { x: moveForce, y: 0 }
      );
    },
    KeyA: () => {
      Body.applyForce(
        playerA,
        {
          x: playerA.position.x,
          y: playerA.position.y,
        },
        { x: -moveForce, y: 0 }
      );
    },
    KeyW: () => {
      Body.applyForce(
        playerA,
        {
          x: playerA.position.x,
          y: playerA.position.y,
        },
        { x: 0, y: -moveForce }
      );
    },
    KeyS: () => {
      Body.applyForce(
        playerA,
        {
          x: playerA.position.x,
          y: playerA.position.y,
        },
        { x: 0, y: moveForce }
      );
    },
    ArrowRight: () => {
      Body.applyForce(
        playerB,
        {
          x: playerB.position.x,
          y: playerB.position.y,
        },
        { x: moveForce, y: 0 }
      );
    },
    ArrowLeft: () => {
      Body.applyForce(
        playerB,
        {
          x: playerB.position.x,
          y: playerB.position.y,
        },
        { x: -moveForce, y: 0 }
      );
    },
    ArrowUp: () => {
      Body.applyForce(
        playerB,
        {
          x: playerB.position.x,
          y: playerB.position.y,
        },
        { x: 0, y: -moveForce }
      );
    },
    ArrowDown: () => {
      Body.applyForce(
        playerB,
        {
          x: playerB.position.x,
          y: playerB.position.y,
        },
        { x: 0, y: moveForce }
      );
    },
    Backquote: () => {
      if (
        Math.abs(playerA.position.x - ball.position.x) < 45 &&
        Math.abs(playerA.position.y - ball.position.y) < 45
      ) {
        Body.applyForce(
          ball,
          {
            x: ball.position.x,
            y: ball.position.y,
          },
          {
            x: shootForce * (ball.position.x - playerA.position.x),
            y: shootForce * (ball.position.y - playerA.position.y),
          }
        );
      }
    },
    KeyP: () => {
      if (
        Math.abs(playerB.position.x - ball.position.x) < 45 &&
        Math.abs(playerB.position.y - ball.position.y) < 45
      ) {
        Body.applyForce(
          ball,
          {
            x: ball.position.x,
            y: ball.position.y,
          },
          {
            x: shootForce * (ball.position.x - playerB.position.x),
            y: shootForce * (ball.position.y - playerB.position.y),
          }
        );
      }
    },
  };

  const keysDown = new Set();

  document.addEventListener("keydown", (event) => {
    keysDown.add(event.code);
  });

  document.addEventListener("keyup", (event) => {
    keysDown.delete(event.code);
  });

  Events.on(engine, "beforeUpdate", () => {
    [...keysDown].forEach((key) => {
      keyHandlers[key]?.();
    });
  });

  // goal handling

  Events.on(engine, "collisionStart", function (event) {
    var pairs = event.pairs;

    for (var i = 0, j = pairs.length; i !== j; ++i) {
      var pair = pairs[i];

      if (pair.bodyA === ball && pair.bodyB === playerAGoal) {
        pair.bodyB.render.fillStyle = "#fff";
        setTimeout(() => {
          setGoalACounter(goalACounter + 1);
        }, 3000);
      } else if (pair.bodyA === ball && pair.bodyB === playerBGoal) {
        pair.bodyB.render.fillStyle = "#fff";
        setTimeout(() => {
          setGoalBCounter(goalBCounter + 1);
        }, 3000);
      }
    }
  });

  return (
    <>
      <div ref={boxRef} className="box">
        <canvas ref={canvasRef} />
      </div>
    </>
  );
};

export default Hax;
