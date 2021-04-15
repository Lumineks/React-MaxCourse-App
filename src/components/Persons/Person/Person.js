import classes from './Person.module.css'

const Person = (props) => {
  return (
    <div className={classes.person}>
      <p onClick={props.click}>I am {props.name}, and i am {props.age} year old </p>
      <input onChange={props.changed} value={props.name} />
      <p> {props.children} </p>
    </div> 
  );
};

export default Person;