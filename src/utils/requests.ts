import type { MetaEnv, UsedTrack, FormCallback } from '@/types/index'
import { toRaw } from 'vue'
import { remapItem  } from './helpers'

export const buildHeaders = (metaEnv: MetaEnv | any, callback: FormCallback) => {
  // console.log()
  // console.log('utils > emailing > buildHeaders >  metaEnv :', metaEnv)
  // const mode = 'cors'
  // console.log('utils > emailing > buildHeaders >  mode :', mode)

  // const method = callback.method
  const headerApiKey = callback.headerApiKey
  const headers = {...callback.headers}
  // @ts-ignore
  const apiKey = metaEnv[callback.envApiKey]
  // console.log('utils > emailing > buildHeaders >  method :', method)
  // console.log('utils > emailing > buildHeaders >  headerApiKey :', headerApiKey)
  // console.log('utils > emailing > buildHeaders >  apiKey :', apiKey)
  
  // @ts-ignore
  headers[headerApiKey] = apiKey
  // console.log('utils > emailing > buildHeaders >  headers :', headers)

  return headers
}

export const sendApiRequest = async (callback: FormCallback, formData: object | any, usedTrack: UsedTrack[] = [], props: object | any = undefined) => {
  // console.log()
  // console.log('utils > emailing > sendApiRequest >  callback.action :', callback.action)
  // console.log('utils > emailing > sendApiRequest >  formData :', formData)
  // console.log('utils > emailing > sendApiRequest >  usedTrack :', usedTrack)
  // console.log('utils > emailing > sendApiRequest >  props :', props)
  
  const metaEnv = import.meta.env
  // console.log('utils > emailing > sendApiRequest >  metaEnv :', metaEnv)
  const url = callback.url
  const method = callback.method
  const headers = buildHeaders(metaEnv, callback)
  // console.log('utils > emailing > sendApiRequest >  url :', url)
  // console.log('utils > emailing > sendApiRequest >  method :', method)
  // console.log('utils > emailing > sendApiRequest >  headers :', headers)

  const usedTrackValues = usedTrack.map(usedTrack => {
    const values = usedTrack.selected?.map(s => s.value)
    return toRaw(values.map(i => toRaw(i)))
  }).filter(i => i?.length)
  // console.log('utils > emailing > sendApiRequest >  usedTrackValues :', usedTrackValues)

  const trackValues: any[] = usedTrackValues.flat(1)
  // console.log('utils > emailing > sendApiRequest >  trackValues :', trackValues)

  let data: any = callback.dataStructure || {}

  const dataMapping = callback.dataMapping.filter(dm => !dm.onlyRemap)
  // const listIds = metaEnv[callback.envListIds].split(',').map((id: string) => parseInt(id))
  // console.log('utils > emailing > sendApiRequest >  dataMapping :', dataMapping)
  // console.log('utils > emailing > sendApiRequest >  listIds :', listIds)

  data = remapItem(data, dataMapping, formData, trackValues, props)
  // console.log('utils > emailing > sendApiRequest >  data :', data)
  const body = JSON.stringify(data)
  // console.log('utils > emailing > sendApiRequest >  body :', body)

  // fetch and return
  const respJson = await sendRequest(url, method, headers, body, callback.action)
  return respJson
  // return {}
}

export const sendRequest = async (url: string, method: string, headers: any, body: any, action: string) => {
  // console.log()
  // console.log('utils > emailing > sendRequest >  url :', url)
  // console.log('utils > emailing > sendRequest >  method :', method)
  // console.log('utils > emailing > sendRequest >  headers :', headers)
  // send request
  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: body
  })
  console.log('utils > emailing > sendRequest >  response :', response)
  const respJson = await response.json()
  respJson.action = action
  respJson.ok = response.ok
  respJson.status = response.status
  respJson.statusText = response.statusText
  respJson.url = response.url
  // console.log('utils > emailing > sendRequest >  respJson :', respJson)
  
  return respJson
}