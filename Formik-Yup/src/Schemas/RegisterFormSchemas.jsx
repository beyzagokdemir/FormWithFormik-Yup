import * as yup from "yup";

export const RegisterFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli email adresi giriniz")
    .required("Email Adresi Zorunlu"),

  age: yup
    .number()
    .positive("Pozitif bir değer giriniz")
    .integer("Tam sayı giriniz")
    .required("Yaş Alanı Zorunlu"),

  password: yup.string().required("Şifre Alanı Zorunlu"),
  confirmPassword: yup
    .string()
    .required("Şifre Tekrarı Zorunlu")
    .oneOf(
      [yup.ref("password", yup.password)],
      "Şifre ile Şifre Tekrarı Aynı Olmalıdır."
    ),

  term: yup.boolean().required("Lütfen kutucuğu onaylayınız"),
});
