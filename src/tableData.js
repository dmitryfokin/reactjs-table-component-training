export default {
  data: {
    rows: {
      1: {
        rowId: 1,
        idTask: 1,
        description: 'Задача 1',
        status: 'Новая',
        completed: false,
      },
      2: {
        rowId: 2,
        idTask: 2,
        description: 'Задача 2',
        status: 'В работе',
        completed: false,
      },
      3: {
        rowId: 3,
        idTask: 3,
        description: 'Задача 3',
        status: 'Выполнена',
        completed: true,
      },
    },
  },
  viewSettings: {
    columns: [
      {
        id: 1,
        name: 'description',
        description: 'Описание задачи',
        show: true,
        disable: false,
      },
      {
        id: 2,
        name: 'status',
        description: 'Статус',
        show: true,
        disable: false,
      },
    ],
  },
}