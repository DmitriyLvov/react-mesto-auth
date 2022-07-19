import { useState, useCallback } from 'react';

export function useFormAndValidation() {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFormValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setFormValues, setErrors, setIsValid]
  );

  return {
    formValues,
    setFormValues,
    handleChangeInput,
    errors,
    isValid,
    resetForm,
    setIsValid,
  };
}
