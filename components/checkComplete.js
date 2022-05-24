const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (event) => completeTask(event, id));
  return i;
};
//Inmediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.remove("far");
  console.log(id);
  const task = JSON.parse(localStorage.getItem("tasks"));

  const index = task.findIndex((item) => item.id == id);
  console.log(index);
  task[index]["complete"] = !task[index]["complete"];
  console.log(task);
  localStorage.setItem("tasks", JSON.stringify(task));
};
export default checkComplete;
