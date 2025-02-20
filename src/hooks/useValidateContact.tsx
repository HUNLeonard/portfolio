import { useState } from "react";

type Error = {
  email?: string,
  message?: string,
}


export const useValidateContact = () => {
  const [error, setError] = useState<Error>({})

  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setError({});
      let error = false;
      const formData = new FormData(e.currentTarget);
      //const name = formData.get("from_name") as string;
      const email = formData.get("from_email") as string;
      //const subject = formData.get("subject") as string;
      const message = formData.get("message") as string;

      if (!email.includes('@') || email.split('@')[0].length === 0 || email.split("@")[1].split('.')[0].length === 0
        || !email.split("@")[1].includes('.') || email.split("@")[1].split('.')[1].length === 0) {
        error = true;
        setError(p => ({ ...p, email: "Email format invalid!" }))
      }
      if (message.length < 10) {
        error = true;
        setError(p => ({ ...p, message: "Please provide minimum 10 character long message." }))
      }

      return !error;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return { error, validate };
}