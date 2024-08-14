interface IDioBank {
  login: boolean
}

const dioBank = {
  login: false
}

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("dioBank")
}

export const createLocalStorage = () : void => {
  localStorage.setItem("dioBank", JSON.stringify(dioBank))
}

export const updateLocalStorage = (dioBank: IDioBank ) => {
  localStorage.setItem("dioBank", JSON.stringify(dioBank))
}