const list = {
 "create a new practice task": "In Progress",
 "make a bed": "Done",
 "write a post": "To Do",
}

function changeStatus(tasks, progress) {
   for(let key in list) {
      if(tasks == key) {
         list[key] = progress;
      }
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

function showList() {
   console.log('Todo:')
   for(let key in list) {
      if(list[key] === "To Do") {
         console.log(`  "${key}"`);
      }
   }
   console.log('In Progress:')
   for(let key in list) {
      if(list[key] === "In Progress") {
         console.log(`  "${key}"`);
      }
   }
   console.log('Done:')
   for(let key in list) {
      if(list[key] === "Done") {
         console.log(`  "${key}"`);
      }
   }
}

Object.assign(list, addTask(), deleteTask());
showList();