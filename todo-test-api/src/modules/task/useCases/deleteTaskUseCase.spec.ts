import { hash } from 'bcrypt';
import { makeUser } from '../../../modules/user/factory/userFactory';
import { TaskRepositoryInMemory } from '../repositories/taskRepositoryInMemory';
import { CreateTaskUseCase } from './createTaskUseCase';
import { DeleteTaskUseCase } from './deleteTaskUseCase';

let taskRepositoryInMemory: TaskRepositoryInMemory;
let createTaskUseCase: CreateTaskUseCase;
let deleteTaskUseCase: DeleteTaskUseCase;

describe('Delete Task', () => {
  beforeEach(() => {
    taskRepositoryInMemory = new TaskRepositoryInMemory();
    createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
    deleteTaskUseCase = new DeleteTaskUseCase(taskRepositoryInMemory);
  });

  it('Should be able to delete an task', async () => {
    const userPasswordWithoutEncryption = '123456';

    const user = makeUser({
      password_hash: await hash(userPasswordWithoutEncryption, 10),
    });

    const task = await createTaskUseCase.execute({
      content: 'task antes de editar',
      user_id: user.id,
    });

    await deleteTaskUseCase.execute({ task_id: task.id, user_id: user.id });

    expect(taskRepositoryInMemory.tasks).toEqual([]);
  });
});
