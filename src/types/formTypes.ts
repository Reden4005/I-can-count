export interface FormElements extends HTMLFormControlsCollection {
    userInput: HTMLInputElement;
};
  
export interface UserFormElement extends HTMLFormElement {
    readonly elements: FormElements;
};