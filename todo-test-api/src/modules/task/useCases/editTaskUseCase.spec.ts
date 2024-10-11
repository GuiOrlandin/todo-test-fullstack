import { hash } from 'bcrypt';
import { makeUser } from '../../../modules/user/factory/userFactory';
import { TaskRepositoryInMemory } from '../repositories/taskRepositoryInMemory';
import { CreateTaskUseCase } from './createTaskUseCase';
import { EditTaskUseCase } from './editTaskUseCase';

let taskRepositoryInMemory: TaskRepositoryInMemory;
let createTaskUseCase: CreateTaskUseCase;
let editTaskUseCase: EditTaskUseCase;

describe('Edit Task', () => {
  beforeEach(() => {
    taskRepositoryInMemory = new TaskRepositoryInMemory();
    createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
    editTaskUseCase = new EditTaskUseCase(taskRepositoryInMemory);
  });

  it('Should be able to edit an task', async () => {
    const userPasswordWithoutEncryption = '123456';

    const user = makeUser({
      password_hash: await hash(userPasswordWithoutEncryption, 10),
    });

    const task = await createTaskUseCase.execute({
      content: 'task antes de editar',
      user_id: user.id,
    });

    await editTaskUseCase.execute({
      task_id: task.id,
      user_id: user.id,
      content: 'task editada',
    });

    expect(task.content).toEqual('task editada');
  });
});
