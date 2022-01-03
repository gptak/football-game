import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import "./Hax.css";

const Hax = () => {
  const [score, setScore] = useState(0);

  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const Engine = Matter.Engine;
  const Runner = Matter.Runner;
  const Render = Matter.Render;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Events = Matter.Events;
  const engine = Engine.create({});

  const width = 1400;
  const height = 800;
  const ballPosX = 200;
  const ballPosY = height - 200;
  const targetPosX = Math.random() * width;
  const targetPosY = Math.random() * height;

  const target = Bodies.circle(targetPosX, targetPosY, 100, {
    isStatic: true,
    isSensor: true,
  });

  let ball = Bodies.circle(ballPosX, ballPosY, 10);

  const sling = Matter.Constraint.create({
    pointA: { x: ballPosX, y: ballPosY },
    bodyB: ball,
    stiffness: 0.05,
  });

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

    let mouse = Matter.Mouse.create(render.canvas);
    let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    let firing = false;
    Matter.Events.on(mouseConstraint, "enddrag", (e) => {
      if (e.body === ball) firing = true;
    });
    Matter.Events.on(engine, "afterUpdate", () => {
      if (
        firing &&
        Math.abs(ball.position.x - ballPosX) < 10 &&
        Math.abs(ball.position.y - ballPosY) < 10
      ) {
        ball = Matter.Bodies.circle(ballPosX, ballPosY, 10);
        Matter.World.add(engine.world, ball);
        sling.bodyB = ball;
        firing = false;
      }
    });

    World.add(engine.world, [target, mouseConstraint, sling, ball]);

    Runner.run(engine);
    Render.run(render);
  });

  Events.on(engine, "collisionStart", (e) => {
    let pairs = e.pairs;

    for (let i = 0, j = pairs.length; i !== j; ++i) {
      let pair = pairs[i];
      console.log(pair)
      if (pair.bodyA === ball || pair.bodyB === target) {
        pair.bodyA.render.fillStyle = "#333";
        pair.bodyB.render.fillStyle = "#333";

          setScore(score + 1);
        
      }
    }
  });

  return (
    <>
      <div className="scoreBoard">
        <span>{score}</span>
      </div>
      <div ref={boxRef} className="box">
        <div>
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default Hax;
