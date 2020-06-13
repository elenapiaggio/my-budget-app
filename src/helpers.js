export const reviewBudget = (budget, remaining) => {
  let theClass;

  if (budget / 4 > remaining) {
    theClass = "alert alert-danger";
  } else if (budget / 2 > remaining) {
    theClass = "alert alert-warning";
  } else {
    theClass = "alert alert-success";
  }
  return theClass;
};
