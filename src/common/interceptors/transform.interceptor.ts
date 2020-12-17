/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-12-04 09:57:35
 * @LastEditors  : liulib
 * @LastEditTime : 2020-12-17 13:57:40
 */
import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface Response<T> {
  data: T;
}
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map(data => {
        return {
          code: 1,
          message: '请求成功',
          data,
        };
      }),
    );
  }
}
