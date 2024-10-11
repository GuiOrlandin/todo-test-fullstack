import { randomUUID } from 'crypto';

export interface TaskSchema {
  completed: boolean;
  content: string;
  id?: string;
  user_id: string;
  created_at?: Date;
}

export class Task {
  private props: TaskSchema;

  constructor(props: TaskSchema) {
    this.props = {
      ...props,
      created_at: props.created_at || new Date(),
      id: props.id || randomUUID(),
    };
  }

  get id(): string {
    return this.props.id;
  }

  get completed(): boolean {
    return this.props.completed;
  }

  set completed(completed: boolean) {
    this.props.completed = completed;
  }

  get user_id(): string {
    return this.props.user_id;
  }

  set user_id(user_id: string) {
    this.props.user_id = user_id;
  }

  get content(): string {
    return this.props.content;
  }

  set content(content: string) {
    this.props.content = content;
  }

  get created_at(): Date {
    return this.props.created_at;
  }
}
