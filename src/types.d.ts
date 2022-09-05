import { Weather, Visibility } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensetiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensetiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDairyEntry = Omit<DiaryEntry, 'id'>
