import { DiaryEntry, NewDairyEntry, NonSensetiveInfoDiaryEntry } from '../types'
import diaryDate from './diaries.json'

const diaries: DiaryEntry[] = diaryDate as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensetiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensetiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiariEntry: NewDairyEntry): DiaryEntry => {
  const newDairy = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiariEntry
  }

  diaries.push(newDairy)
  return newDairy
}
