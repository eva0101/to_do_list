const list = {
 "create a new practice task": "In Progress",
 "make a bed": "Done",
 "write a post": "To Do",
}

function changeStatus(tasks, progress) {
   if(tasks in list) {
      list[tasks] = progress;
   }
}
changeStatus("create a new practice task", "To Do");
changeStatus("make a bed", "To Do");
changeStatus("write a post", "In Progress");

function addTask() {
   list['practice'] = "In Progress";
   list['workout'] = "Done";
}

function deleteTask() {
   delete list['workout'];
}

function showList(tasks) {
   for(tasks in list) {
      if(tasks === "To Do") {
         console.log('create a new practice task');
      } else if(tasks === "In Progress") {
      } else if(tasks === "Done") {
      } else {return console.log('-')};
   }
}
showList();
Object.assign(list, addTask(), deleteTask());
