const StepItem = props => {
  const { task, steps } = props;

  console.log('task:', task);
  console.log('steps:', steps);

  return <div>hello task</div>;
};

export default StepItem;
