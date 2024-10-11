import { hash } from 'bcrypt';
import { makeUser } from '../../../modules/user/factory/userFactory';
import { TaskRepositoryInMemory } from '../repositories/taskRepositoryInMemory';
import { CreateTaskUseCase } from './createTaskUseCase';
import { FindAllTasksOfUserUseCase } from './findAllTasksOfUser';

let createTaskUseCase: CreateTaskUseCase;
let findAllTasksOfUserUseCase: FindAllTasksOfUserUseCase;
let taskRepositoryInMemory: TaskRepositoryInMemory;

describe('Fin all Task of user', () => {
  beforeEach(() => {
    taskRepositoryInMemory = new TaskRepositoryInMemory();
    createTaskUseCase = new CreateTaskUseCase(taskRepositoryInMemory);
    findAllTasksOfUserUseCase = new FindAllTasksOfUserUseCase(
      taskRepositoryInMemory,
    );
  });

  it('Should be able to find all task of user', async () => {
    const userPasswordWithoutEncryption = '123456';

    const user = makeUser({
      password_hash: await hash(userPasswordWithoutEncryption, 10),
    });

    const task1 = await createTaskUseCase.execute({
      content: 'task1',
      user_id: user.id,
    });
    const task2 = await createTaskUseCase.execute({
      content: 'task2',
      user_id: user.id,
    });

    const tasksOfUse = await findAllTasksOfUserUseCase.execute({
      user_id: user.id,
    });

    expect(tasksOfUse).toEqual([task1, task2]);
  });
});
