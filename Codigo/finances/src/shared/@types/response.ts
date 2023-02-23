export default interface APIResponse<T> {
  rows: T[];
  count: number;
}
