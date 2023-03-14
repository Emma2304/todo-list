const input = document.querySelector("#input");
const form = document.querySelector("#form");
const lista = document.querySelector("#lista");
const totalCountSpan = document.querySelector('.total-count');
const completedCountSpan = document.querySelector('.completed-count');
const incompletedCountSpan = document.querySelector('.incompleted-count')

const getTareas = () => {
    lista.innerHTML = localStorage.getItem('task');
}
getTareas();

const totalCount = () => {
    const howMany = document.querySelector('#lista').children.length;
    totalCountSpan.innerHTML = howMany;
};

const completeCount = () => {
    const howMany = document.querySelectorAll('.completed').length;
    completedCountSpan.innerHTML = howMany;
};

const incompletedCount = () => {
    const howMany = document.querySelectorAll('li:not(.completed)').length;
    incompletedCountSpan.textContent = howMany;
};

const todoCount = () => {
    totalCount();
    completeCount();
    incompletedCount();
};

form.addEventListener('submit', e => {
    e.preventDefault();
    const newTask = {
        task: input.value
    }

    // Funcion agregar tarea

    const listItem = document.createElement('li');
    listItem.innerHTML = ` 
    <button class="delete-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
    </button>
    <p class="text">${newTask.task}</p>
    <button class="check-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    </button>
    `;
    listItem.classList.add('li');
    lista.append(listItem);
    localStorage.setItem('task', lista.innerHTML);

    todoCount();
});

//Borrar y tachar las tareas

lista.addEventListener('click', e => {

    if (e.target.classList.contains('delete-icon')) {
        e.target.parentElement.remove();
        localStorage.setItem('task', lista.innerHTML);
        todoCount();
    }

    if (e.target.classList.contains('check-btn')) {
        e.target.parentElement.classList.add('completed');
        localStorage.setItem('task', lista.innerHTML);
    }
    todoCount();
}
    // if (e.target.closest('check-btn')) {
    //     const checkIcon = e.target.closest('.check-btn');
    //             const listCheck = checkIcon.parentElement;
    //             if (!listItem.classList.contains('line-through')) {
    //                 checkIcon.classList.add('bg-green-400');
    //                 checkIcon.classList.remove('hover:bg-green-300');
    //                 listItem.classList.add('line-through');
    //             } else {
    //                 checkIcon.classList.remove('bg-green-400');
    //                 checkIcon.classList.add('hover:bg-green-300');
    //                 listItem.classList.remove('line-through');
    //             }
    // }
)