import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const Test = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  let Engine = Matter.Engine;
  let Runner = Matter.Runner;
  let Render = Matter.Render;
  let World = Matter.World;
  let Bodies = Matter.Bodies;
  let engine = Engine.create({});

  const width = 1200;
  const height = 800;

  useEffect(() => {
    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: width,
        height: height,
        background: "rgba(255, 0, 0, 0.5)",
        wireframes: false,
      },
    });

    engine.gravity.y = 0;

    const floor = Bodies.rectangle(width / 2, height + 10, width, 20, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    });

    const ceiling = Bodies.rectangle(width / 2, -10, width, 20, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    });

    const wallLeft = Bodies.rectangle(-10, height / 2, 20, height, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    });

    const wallRight = Bodies.rectangle(width + 10, height / 2, 20, height, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    });

    let mouse = Matter.Mouse.create(render.canvas);
    let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    const playerA = Bodies.circle(200, height / 2, 20, {
      restitution: 0,
      render: {
        fillStyle: "yellow",
      },
    });

    const playerB = Bodies.circle(width - 200, height / 2, 20, {
      restitution: 0,
      render: {
        fillStyle: "green",
      },
    });

    const ball = Bodies.circle(width / 2, height / 2, 10, {
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
      mouseConstraint,
    ]);

    Runner.run(engine);
    Render.run(render);
  });

  document.body.addEventListener("click", function (e) {
    const ball = Bodies.circle(e.screenX - 8, e.screenY - 80, 20, {
      restitution: 1,
      render: {
        fillStyle: "yellow",
      },
    });
    World.add(engine.world, ball);
  });

  return (
    <>
      <div ref={boxRef}>
        <canvas ref={canvasRef} />
      </div>
    </>
  );
};

export default Test;

