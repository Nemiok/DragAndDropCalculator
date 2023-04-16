import { stateNames } from './../utils/entities/stateNames';
import { useEffect, useState } from "react"
import { useAppDispatch } from "../store/hooks"
import { removeItem } from "../store/reducers/constructionStateReducer"

export const useListenerOnDeskDblclick = (id: string, reference: React.RefObject<HTMLDivElement>, currentWay: string) => {
  const dispatch = useAppDispatch()

  const [shouldRemoveItem, setShouldRemoveItem] = useState<boolean>(false)

  useEffect(() => {
    if (shouldRemoveItem) {
      dispatch(removeItem({ id, currentWay }))
    }
  }, [shouldRemoveItem])

  useEffect(() => {
    const dblClickEvent: any = reference.current?.addEventListener('dblclick', (e) => {
      e.preventDefault()
      if (currentWay === stateNames.runtimeWay) {
        setShouldRemoveItem(false)
      }
      else if (currentWay === stateNames.constructorWay) {
        setShouldRemoveItem(true)
      }
    })
    return () => {
      reference.current?.removeEventListener('dblclick', dblClickEvent)
    }
  }, [currentWay])


}

