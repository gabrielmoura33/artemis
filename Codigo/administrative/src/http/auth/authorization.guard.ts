import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { FirebaseSingletonService } from '../firebase/firebase.service';

interface FirebaseUserProps {
  sub: string;
  email: string;
}

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  private firebaseService;
  constructor() {
    this.firebaseService = FirebaseSingletonService;
  }
  async canActivate(context: ExecutionContext) {
    const { req, res } = GqlExecutionContext.create(context).getContext();

    const token = req.headers.authorization;

    if (!token) throw new UnauthorizedException();

    const firebaseUser = await this.firebaseService.instance.default_app
      .auth()
      .verifyIdToken(token, true)
      .catch((err) => {
        throw new UnauthorizedException(err.message);
      });

    if (!firebaseUser) {
      throw new UnauthorizedException();
    }

    req.user = {
      sub: firebaseUser.sub,
      email: firebaseUser.email,
    };
    return true;
  }
}
