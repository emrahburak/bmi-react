

export const bmiCalculator = (height: number, weight: number) => {

  const heightValue = height/100

  const bmi = (weight / (heightValue * heightValue));

  console.log("inside bmi ", bmi)

  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  return category;
}
