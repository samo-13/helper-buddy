import React from "react";
import StepList from "./components/StepList";
import Step from "./components/Step;"

//task with steps
export default function Task(props) {
  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h1>I am the task component</h1>
        <h2 className="text--regular">{props.task_name}</h2>
        <section className={"task_name"}>
          <h4 className="text--light">Steps</h4>
          <h3 className="text--regular">
            {props.step.name && props.step.description}
          </h3>
        </section>
      </section>
    </main>
  );
}