import { User } from '../entities/user';

type Override = Partial<User>;

export function makeUser({ ...override }: Override) {
  return new User({
    email: 'guiorlandin@gmail.com',
    password_hash: '123456',
    ...override,
  });
}
