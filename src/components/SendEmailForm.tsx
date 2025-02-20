import H2 from "../features/H2";
import Input from "../features/Input";
import Label from "../features/Label";
import { cn } from "../utils/cn";
import AnimatedLoading from "../features/AnimatedLoading";
import { useValidateContact } from "../hooks/useValidateContact";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import EmailNotification, { NotificationType } from "../features/EmailNotification ";


const SendEmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { error, validate } = useValidateContact();
  const [notification, setNotification] = useState<{
    type: NotificationType;
    message: string;
    visible: boolean;
  }>({
    type: null,
    message: "",
    visible: false
  });

  const showNotification = (type: NotificationType, message: string) => {
    setNotification({
      type,
      message,
      visible: true
    });
  };

  const closeNotification = () => {
    setNotification(prev => ({
      ...prev,
      visible: false
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const response = validate(e);

    if (response) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          e.currentTarget,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC,
          },
        )
        .then(
          () => {
            console.log("SUCCESS!");
            showNotification('success', 'Your message has been sent successfully!');
            (e.target as HTMLFormElement).reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            showNotification('error', `Failed to send message: ${error.text}`);
          },
        )
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
      showNotification('error', 'Please fix the errors in the form before submitting.');
    }
  };

  return (
    <>
      <EmailNotification
        type={notification.type}
        message={notification.message}
        visible={notification.visible}
        onClose={closeNotification}
      />

      <form
        onSubmit={(e) => handleSubmit(e)}
        method="POST"
        className="mx-auto w-full rounded-lg bg-gray-900 max-w-3xl lg:max-w-4xl min-h-16 p-4"
      >
        <p className="text-lg -mb-2">Get in touch.</p>
        <H2 gray={true}>Contact.</H2>
        <div className="px-1 sm:px-4 py-2 flex flex-col gap-4">
          <div>
            <Label htmlFor="from_name">Name</Label>
            <Input type="text" name="from_name" placeholder="Enter your Name" />
          </div>
          <div>
            <Label htmlFor="from_email" required>
              Email
            </Label>
            <Input
              type="email"
              name="from_email"
              placeholder="Enter your Email"
              required
            />
            <p className="text-red-500 text-base">{error.email}</p>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              name="subject"
              placeholder="Enter the emails subject..."
            />
          </div>
          <div>
            <Label htmlFor="message" required>
              Message
            </Label>
            <textarea
              className={cn(
                "w-full resize-none bg-gray-700 rounded-2xl px-2 py-4 scroll-round text-base sm:text-xl shadow-md",
              )}
              cols={30}
              rows={10}
              name="message"
              placeholder="Enter Your Message"
              required
              autoComplete=""
              minLength={10}
            ></textarea>
            <p className="text-red-500 text-base">{error.message}</p>
          </div>
        </div>

        <div className="mx-auto w-fit">
          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "relative text-white overflow-hidden",
              "transition-all duration-300 px-4 py-2 border-2 rounded-2xl z-10",
              "cursor-pointer shadow-md hover:shadow-xl text-2xl transition-colors duration-500",
              !isLoading ? "button-bg-change" : "",
              "not-disabled:active:scale-95 w-fit mx-auto disabled:cursor-not-allowed disabled:text-neutral-400",
            )}
          >
            {!isLoading ? "Send email" : <AnimatedLoading text="Sending..." />}
          </button>
        </div>
      </form>
    </>
  );
};

export default SendEmailForm;