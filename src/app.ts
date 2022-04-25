//Mamy stworzyc taki li

// <li>
//   <label for="task-1">Wyrzucić śmieci</label>
//   <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
// </li>

//taski
// 1. Wyrzucić śmieci
// 2. Zrobić trening
// 3. Nakarmić Psa

//tworzę stałą task która jest tablica stringów
//zapis można string[] lub <string>

const taskNameInputElement: HTMLInputElement = document.querySelector('#name')!;
const addButtonElement: HTMLButtonElement = document.querySelector('.btn')!; 
const tasksContainerElement: HTMLElement = document.querySelector('.tasks')!;

const tasks: string[] = ['Wyrzucić śmieci', 'Zrobić trening', 'Nakarmić Psa'];
tasks.push('Umyć samochód')

const render = () => {
  tasksContainerElement.textContent = '';
  tasks.forEach(task => {
    const taskElement = document.createElement('li')
    taskElement.textContent = task;
    tasksContainerElement?.append(taskElement)
  })
}

const addtask = (task: string) => {
  tasks.push(task)
}

render();

addButtonElement.addEventListener('click', (event: Event) => {
  //abyformularz się nie przeładowywał po kliknięciu (zabezpieczenie)
  event.preventDefault();
  //po kliku dodajemy element do naszej tablicy tasków
  // tasks.push(taskNameInputElement);  jest dobrze ale skorzystamy z funkcji 
  addtask(taskNameInputElement.value)
  render()
})