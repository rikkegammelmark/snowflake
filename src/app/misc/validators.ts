import { FormControl } from "@angular/forms";

export function nonNegativeIntegerValidator(control: FormControl) {
  if (typeof control.value !== 'number' || control.value < 0) {
    return { invalid: true };
  }
  return null;
}
