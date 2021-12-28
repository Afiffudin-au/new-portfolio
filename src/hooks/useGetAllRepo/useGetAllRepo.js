import { useState } from 'react'
import { repoData } from './repos'
export const useGetAllRepo = () => {
  const [dataRepo, setDataRepo] = useState([])
  const getAllRepo = () => {
    setDataRepo(repoData.map((item) => item))
  }
  return {
    dataRepo,
    getAllRepo,
  }
}
