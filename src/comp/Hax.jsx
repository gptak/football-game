import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const Hax = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  let Engine = Matter.Engine;
  let Runner = Matter.Runner;
  let Render = Matter.Render;
  let World = Matter.World;
  let Bodies = Matter.Bodies;
  let Body = Matter.Body;
  let engine = Engine.create({});

  const width = 800;
  const height = 500;

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

    const floor = Bodies.rectangle(width / 2, height + 10, width, 20, {
      restitution: 0,
      isStatic: true,
    });

    const ceiling = Bodies.rectangle(width / 2, -10, width, 20, {
      restitution: 0,
      isStatic: true,
    });

    const wallLeft = Bodies.rectangle(-10, height / 2, 20, height, {
      restitution: 0,
      isStatic: true,
    });

    const wallRight = Bodies.rectangle(width + 10, height / 2, 20, height, {
      restitution: 0,
      isStatic: true,
    });

    const ball = Bodies.circle(width / 2, height / 2, 15, {
      restitution: 0.5,
      render: {
        fillStyle: "white",
      },
    });

    World.add(engine.world, [
      floor,
      ceiling,
      wallLeft,
      wallRight,
      playerA,
      playerB,
      ball,
    ]);

    engine.gravity.y = 0;

    Runner.run(engine);
    Render.run(render);
  });

  // players movement

  const moveForce = 0.0003;
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
    KeyL: () => {
      Body.applyForce(
        playerB,
        {
          x: playerB.position.x,
          y: playerB.position.y,
        },
        { x: moveForce, y: 0 }
      );
    },
    KeyJ: () => {
      Body.applyForce(
        playerB,
        {
          x: playerB.position.x,
          y: playerB.position.y,
        },
        { x: -moveForce, y: 0 }
      );
    },
    KeyI: () => {
      Body.applyForce(
        playerB,
        {
          x: playerB.position.x,
          y: playerB.position.y,
        },
        { x: 0, y: -moveForce }
      );
    },
    KeyK: () => {
      Body.applyForce(
        playerB,
        {
          x: playerB.position.x,
          y: playerB.position.y,
        },
        { x: 0, y: moveForce }
      );
    },
  };

  const keysDown = new Set();
  document.addEventListener("keydown", (event) => {
    keysDown.add(event.code);
  });
  document.addEventListener("keyup", (event) => {
    keysDown.delete(event.code);
  });

  Matter.Events.on(engine, "beforeUpdate", (event) => {
    [...keysDown].forEach((key) => {
      keyHandlers[key]?.();
    });
  });

  return (
    <>
      <div ref={boxRef}>
        <canvas ref={canvasRef} />
      </div>
    </>
  );
};

export default Hax;
