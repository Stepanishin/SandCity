import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import { getDatabase, ref, get, child } from "firebase/database";

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  refetchOnFocus: true,
  endpoints: (builder:any) => ({
    getJudges: builder.query({
      async queryFn() {
        const dbRef = ref(getDatabase());
        let arr :any 
        try {
          await get(child(dbRef, '/Judges')).then((snapshot:any) => {
            if (snapshot.exists()) {
                arr = Object.entries(snapshot.val()).sort((a: any,b: any) => a[1].id > b[1].id ? -1 : a[1].id < b[1].id ? 1 : 0)
            }
          })
        } catch {
          console.log("No data available");
        }
        return {data: Object.entries(Object.fromEntries(arr))}
      }
    }),
    getUsers: builder.query({
      async queryFn() {
        const dbRef = ref(getDatabase());
        let arr :any 
        try {
          await get(child(dbRef, '/Users')).then((snapshot:any) => {
            if (snapshot.exists()) {
                // arr = snapshot.val()
                arr = Object.entries(snapshot.val())
                // console.log(arr)
            }
          })
        } catch {
          console.log("No data available");
        }
        return {data: arr}
      }
    }),
  })
})


export const { useGetJudgesQuery, useGetUsersQuery, useLazyGetUsersQuery, useLazyGetJudgesQuery } = firebaseApi