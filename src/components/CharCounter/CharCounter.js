import Char from './Char/Char.'
import Validation from './Validation/Validation';
import classes from './CharCounter.module.css';

const CharCounter = (props) => {
  let charsArray = null;
    if (props.chars.length) {
      charsArray = (
        <div>
          {props.chars.map((c) => {
            return (
              <Char
                letter={c.char}
                key={c.id}
                click={() => props.clicked(c.id)}
              />)
          })}
        </div>
      );
    }

  return (
    <div className={classes.charCounter}>
      <input
        className={classes.input}
        onChange={props.changed}
        value={props.chars.map(c=>c.char).join('')} />
      <p> Length: {props.inputLength} </p>
      <Validation length={props.inputLength} />
      
      { charsArray}
    </div>
  );
};




export default CharCounter;