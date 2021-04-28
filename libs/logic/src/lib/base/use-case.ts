export interface UseCase<S, T> {
  execute(param: S): Promise<T>;
}
