export interface Person {
  id : number
  firstname : string
  lastname : string
  pictureURL : string
}

export interface Actor extends Person{
  role : string
}
