const getSleepHours = day =>{
if(day==="monday"){
  return 1;
}
else if(day==="monday"){
  return 2;
}
else if(day==="tuesday"){
  return 3;
}
else if(day==="wednesday"){
  return 4;
}
else if(day==="thursday"){
  return 5;
}
else if(day==="friday"){
  return 6;
}
else if(day==="saturday"){
  return 7;
}
else if(day==="sunday"){
  return 8;
}}
const getActualSleepHours = () =>{
  return getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
}
const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
}

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours===idealSleepHours){
    return "perfect"
  }
  else if(actualSleepHours > idealSleepHours){
    return "to much: " + (actualSleepHours - idealSleepHours);
  }
  else{
    return "not enough: " + (idealSleepHours - actualSleepHours);
  }
}
console.log(calculateSleepDebt());
