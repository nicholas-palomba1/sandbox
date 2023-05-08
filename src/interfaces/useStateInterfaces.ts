export interface Stack { // it is bad practice to nest objects in type interfaces, so see stack: make a new interface to reference the object type within the next interface.
    frontend: string;
    backend: string;
    database: string;
  }
  
export interface User {
    name: string;
    age: number;
    instrument: string;
    stack: Stack
    drink: string;
    isAdmin: boolean;
  }