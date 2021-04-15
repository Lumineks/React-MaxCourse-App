import classes from './Heading.module.css'

const Heading = (props) => {
  const btnStyles = [];
  btnStyles.push(classes.button);

  if (props.isShown)
    btnStyles.push(classes.red);

  return (
    <>
      <h1>Hello, it is a begining of React course!</h1>
      <button
        className={btnStyles.join(' ')}
        onClick={props.click}>
        {props.isShown ? 'Hide persons' : 'Show persons'}
      </button>
    </>
  );
};



export default Heading;