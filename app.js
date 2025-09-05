import 'dotenv/config'; // Remova se não usar Node.js
import { database } from './firebaseConfig';
import { ref, push, set, onValue } from 'firebase/database';

// Adicionar tarefa
window.addTask = async () => {
  const taskInput = document.getElementById('taskInput').value;
  if (taskInput) {
    try {
      const newTaskRef = push(ref(database, 'tasks'));
      await set(newTaskRef, {
        title: taskInput,
        done: false
      });
      document.getElementById('taskInput').value = '';
      console.log('Tarefa adicionada:', newTaskRef.key);
    } catch (error) {
      console.error('Erro ao salvar:', error);
    }
  }
};

// Ler tarefas em tempo real
const tasksRef = ref(database, 'tasks');
onValue(tasksRef, (snapshot) => {
  const data = snapshot.val();
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  if (data) {
    Object.keys(data).forEach((key) => {
      const li = document.createElement('li');
      li.textContent = data[key].title;
      taskList.appendChild(li);
    });
  }
});
