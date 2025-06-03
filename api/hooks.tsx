import { useMutation, useQuery } from "@tanstack/react-query"
import { getCategories, getEventLocations, getFilteredEvents, IFilterEventData } from "./events"
import { useDispatch, useSelector } from "react-redux"
import { setCategories, setEventLocations, setFilteredEvents } from "../data/store/reducers/data"

export const useCategories = () => {
    const categoriesData = useSelector((state: any) => state.data.categories)
    const dispatch = useDispatch()
    return useQuery({
        queryKey: ['categories'],
        enabled: categoriesData == null,
        initialData: categoriesData,
        queryFn: async () => dispatch(setCategories(await getCategories())).payload,
    })
}

export const useEventLocations = () => {
    const eventLocationsData = useSelector((state: any) => state.data.eventLocations)
    const dispatch = useDispatch()
    return useQuery({
        queryKey: ['event-locations'],
        enabled: eventLocationsData == null,
        initialData: eventLocationsData,
        queryFn: async () => dispatch(setEventLocations(await getEventLocations())).payload,
    })
}

export function useSearchEventsFilter(){
    const dispatch = useDispatch()
    return useMutation({
        mutationKey:["search-query"],
        mutationFn: async(props:IFilterEventData)=>{
            const data= await getFilteredEvents(props)
            dispatch(setFilteredEvents(data))
            return data
        }
    })
}


