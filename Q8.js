const name={
    firstName:"Philip",
    lastName:"Fry",
    
  };
  const details={
    job:"Dilvery Boy",
    employer:"Planet Express"
  };
  const key=Object.assign(name,details);
  console.log(key);


Output:

{
  firstName: 'Philip',
  lastName: 'Fry',
  job: 'Dilvery Boy',
  employer: 'Planet Express'
}
