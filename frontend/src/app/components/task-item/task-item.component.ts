import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../Account';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() account: Account;
  @Output() onDeleteTask: EventEmitter<Account> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Account> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task) {
    this.onToggleReminder.emit(task);
  }
}
