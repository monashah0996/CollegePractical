import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class Tasklist {
  tasklist: any = [
    {
      title: 'Humber',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      id: 1,
    },
    {
      title: 'MERN',
      tasks: ['Lab', 'Project', 'Quiz'],
      id: 2,
    },
    {
      title: 'Java',
      tasks: ['Group Discussion', 'Exam', 'Assignment'],
      id: 3,
    },
  ];
  searchTasklist(title: HTMLInputElement) {
    if (title.value != '') {
      this.tasklist = this.tasklist.filter((task: any) =>
        task.title.toLowerCase().includes(title.value.toLowerCase())
      );
    } else {
      this.tasklist = [
        {
          title: 'Humber',
          tasks: ['Task 1', 'Task 2', 'Task 3'],
          id: 1,
        },
        {
          title: 'MERN',
          tasks: ['Lab', 'Project', 'Quiz'],
          id: 2,
        },
        {
          title: 'Java',
          tasks: ['Group Discussion', 'Exam', 'Assignment'],
          id: 3,
        },
      ];
    }
  }

  deleteTasklist(id: number) {
    this.tasklist.forEach((element: any, index: any) => {
      if (element.id == id) this.tasklist.splice(index, 1);
    });
  }
}
