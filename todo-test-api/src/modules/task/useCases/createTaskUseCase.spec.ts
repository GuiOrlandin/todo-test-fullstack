import { hash } from 'bcrypt';
import { makeUser } from '../../../modules/user/factory/userFactory';
import { TaskRepositoryInMemory } from '../repositories/taskRepositoryInMemory';
import { CreateTaskUseCase } from './createTaskUseCase';

let createTaskUseCase: CreateTaskUseCase;
let taskRepositoryInMemory: TaskRepositoryInMemory;

describe('Create Task', () => {
  beforeEach(() => {
    taskRepositoryInMemory = new TaskRepositoryInMemory();
    createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
  });

  it('Should be able to create an task', async () => {
    const userPasswordWithoutEncryption = '123456';

    const user = makeUser({
      password_hash: await hash(userPasswordWithoutEncryption, 10),
    });

    const task = await createTaskUseCase.execute({
      content: 'task antes de editar',
      user_id: user.id,
    });

    expect(taskRepositoryInMemory.tasks).toEqual([task]);
  });
});
