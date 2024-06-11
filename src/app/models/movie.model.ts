import { Actor, Person } from "./person.model"

export interface Movie {
  description : string
  id : number
  realisatorId : number
  title : string
}

export interface MovieDetail {
  id : number
  description : string
  title : string
  realisator : Person
  casting? : Actor[]
}
