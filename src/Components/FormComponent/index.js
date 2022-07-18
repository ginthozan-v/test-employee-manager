import { useEffect } from "react";
import { Button, Radio } from "antd";
import s from "./FormComponent.module.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const sgPhoneRegExp = /\+65(6|8|9)\d{7}/g;
const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("This field is required")
    .min(6, "This field must be at least 6 characters")
    .max(10, "This field must be at most 10 characters"),
  lastName: yup
    .string()
    .required("This field is required")
    .min(6, "This field must be at least 6 characters")
    .max(10, "This field must be at most 10 characters"),
  email: yup
    .string()
    .required("This field is required")
    .email("Please enter a valid email address"),
  phone: yup
    .string()
    .required("This field is required")
    .matches(sgPhoneRegExp, "Phone number is not valid"),
  gender: yup.string().required("Please select one"),
});

const FormComponent = ({ formSubmit, initialValue }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  const beforeunload = (e) => {
    // fires when reload the page without saving the changes
    if (dirtyFields) {
      e.preventDefault();
      e.returnValue = true;
    }
  }

  useEffect(() => {
    window.addEventListener('beforeunload', beforeunload);
    return () => {
        window.removeEventListener('beforeunload', beforeunload);
    }
  }, [])

  const InputComponent = ({ name, placeholder }) => {
    return (
      <>
        <input
          {...register(name)}
          placeholder={placeholder}
          className={`${s.input} ${errors[name] && s.inputError}`}
        />
        {errors?.[name] && <p className={s.error}>{errors[name].message}</p>}
      </>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)} className={s.form}>
        <InputComponent name="firstName" placeholder="First Name" />
        <InputComponent name="lastName" placeholder="Last Name" />
        <InputComponent name="email" placeholder="Email Address" />
        <InputComponent name="phone" placeholder="Phone Number" />

        <div className={s.radioGroup}>
          <p className={s.radioTitle}>Gender:</p>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value={"male"}>Male</Radio>
                <Radio value={"female"}>Female</Radio>
              </Radio.Group>
            )}
          />
          {errors?.gender && <p className={s.error}>{errors.gender.message}</p>}
        </div>

        <Button htmlType="submit" className={s.button}>
          {initialValue.id ? "Update" : "Add"}
        </Button>
      </form>
    </div>
  );
};

export default FormComponent;
