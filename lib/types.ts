export type LinkItem ={
    href:string,
    label:string,
}

export interface WithLinks {
  links: LinkItem[]
}