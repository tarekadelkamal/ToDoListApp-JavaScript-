let button = document.querySelector(".icon-upload"),
    inputsValue = document.querySelector("[name='task']"),
    allTasksElement = document.querySelector("#allTasks"),
    starElement = document.querySelector(".icon-star");
     
   
    
   
//let taskCounter = 0 ;
localStorage.getItem('tasksCounter') ? taskCounter = localStorage.getItem('tasksCounter') : taskCounter = 0 ;

let taskCounterFun = _=> localStorage.setItem('tasksCounter', ++taskCounter);
let storeData = (value) => { taskCounterFun(); localStorage.setItem(`task ${taskCounter}`, value); } ,
    getData = (value) => { let taskName = `task ${value}`; return JSON.parse(localStorage.getItem(taskName));},
    updateData = (taskNum, value) => { localStorage.setItem(`task ${taskNum}`, value); };

    
for(let i=taskCounter; i <= taskCounter ; --i){
    if(i == 0 ) {break;}
   let allTasks = getData(i);
   if(allTasks !== null){
    allTasksElement.innerHTML +=`
    <div class="task" id="${i}">
          <span class="icon-star icon  ${allTasks.star == true ? 'stared' : '' }" onclick=starTask(${i})></span>
          <p>${allTasks.task}</p>
          <div>
              <span class="icon-trash icon" onclick=deleteTask(${i})></span>
              <span class="icon-angry icon"></span>
          </div>
      </div>`;
   } 
}

let deleteTask = (value) => {localStorage.removeItem('task '+value);  location.reload();}
let starTask = (value) => { 
      let dataResult = getData(value);
      let updatedStar  = dataResult.star == false ? true : false  ;
      let updatedData = JSON.stringify({task: dataResult.task, done: dataResult.done, star: updatedStar}) ;
      updateData(value,updatedData);
      location.reload();  
    };


button.addEventListener('click', function (event){
    event.preventDefault();
    let taskData = {task: inputsValue.value, done: false, star: false};
    storeData(JSON.stringify(taskData));
    location.reload();
      
}); 

 