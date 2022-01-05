import { FormGroup } from '@angular/forms';

export function senhasDiferentesValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value ?? '';
  const passwordConfirm = formGroup.get('passwordConfirm')?.value ?? '';

  if (password.trim() + passwordConfirm.trim()) {
    return password !== passwordConfirm ? null : { senhasDiferentes: true };
  } else {
    return null;
  }
}
