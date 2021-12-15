import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const SkiJump = () => {

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

  const width = 1500;
  const height = 800;

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
 

  useEffect(() => {
    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: width,
        height: height,
        background: "lightBlue",
        wireframes: false,
      },
    });

    World.add(engine.world, [ wallDown, wallLeft, wallUp, wallRight]);

    Runner.run(engine);
    Render.run(render);
  });



  return (
    <>
      <div ref={boxRef} className="box">
        <div>
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default SkiJump;
