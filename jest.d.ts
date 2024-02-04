// import JestMatchers from "jest"

// declare const expect: jest.Expect & {toBeInTheDocument:any}
declare module jest { 
    interface JestMatchers{
        toBeInTheDocument:any
    }
}