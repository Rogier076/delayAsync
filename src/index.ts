export const delayAsync = <T>(delay: number, returnValue: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(returnValue), delay));
export default delayAsync;
