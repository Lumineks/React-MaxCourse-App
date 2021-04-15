const Validation = (prop) => {
  return (
    <p>
      {prop.length < 5 ? 'Text too short' : 'Text long enough'}
    </p>
  );
};


export default Validation;