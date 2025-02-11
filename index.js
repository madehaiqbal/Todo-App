var Todos = []
    
        

var Type_Alltodos = JSON.stringify(Todos)

localStorage.setItem("Alltodos", Type_Alltodos)


function todotask() {

 
    var Usertodo = document.getElementById("usertodo").value;
    var Userdate = document.getElementById("userdate").value;

var Newuser ={
    task: Usertodo,
    Date: Userdate,
    status:"incomp",
}

Todos.push(Newuser)

var Type_Alltodos = JSON.stringify(Todos)

localStorage.setItem("Alltodos", Type_Alltodos)


readtask()
}

function readtask(){

   var tbody = document.getElementById("tbodyData")
   tbody.innerHTML=" ";

var item=localStorage.getItem("Alltodos")

var todositem =JSON.parse(item)



todositem.forEach(
    (element,index)=>{

        tbody.innerHTML+=`
        <tr id=${index}>
                        <th scope="row">${index+1}</th>
                        <td>${element.task}</td>
                        <td>${element.Date}</td>
                        <th scope="col "><button class="btn btn-primary" onclick="compeletetodo('${element.task}')">Complete</button>
                            <button class="btn btn-danger">Delete</button>
                        </th>

                    </tr>
        `


    }
);



}


function compeletetodo(taskid){
    
    var items = JSON.parse(localStorage.getItem("Alltodos"));

  
var singletodo = items.find( perdict => perdict.task == taskid )



singletodo.status="comp"



localStorage.setItem("Alltodos", JSON.stringify(items))
   
}


