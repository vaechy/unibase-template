import { http } from '@/utils/http'

export interface IFooItem {
  id: string
  name: string
}

/** GET 请求 */
export const getSample = (name: string) => {
  return http.get<IFooItem>('/foo', { name })
}

/** POST 请求 */
export const postSample = (name: string) => {
  return http.post<IFooItem>('/foo', { name })
}
