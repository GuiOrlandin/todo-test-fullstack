import { hash } from 'bcrypt';
import { SignInUseCase } from './signInUseCase';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from '../models/userPayload';
import { makeUser } from '../../user/factory/userFactory';

let signInUseCase: SignInUseCase;
let jwtService: JwtService;

describe('Sign In', () => {
  beforeEach(() => {
    jwtService = new JwtService({ secret: 'secret' });
    signInUseCase = new SignInUseCase(jwtService);
  });

  it('Should be able to created valid access token', async () => {
    const userPasswordWithoutEncryption = '123456';

    const user = makeUser({
      password_hash: await hash(userPasswordWithoutEncryption, 10),
    });

    const token = await signInUseCase.execute({
      user,
    });

    const payload = jwtService.decode(token) as UserPayload;

    expect(payload.sub).toEqual(user.id);
  });
});
