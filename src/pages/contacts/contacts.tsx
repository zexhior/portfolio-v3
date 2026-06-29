import { Card, CardContent } from "@/components/ui/card";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { animationFadeIn } from "@/lib/style";
import { useSendMessage } from "@/hooks/message";
import type { Contacts } from "@/lib/type";
import type React from "react";
import { icons } from "@/lib/icons";

const messageSchema = z.object({
  name: z.string().nonempty("Veuillez fournir votre nom"),
  email: z.email("Saisissez un email valide").nonempty("Veuillez fournir votre email!"),
  messages: z.string().nonempty("Veuillez écrire votre message"),
});

interface PropsContacts {
  contacts?: Contacts;
}

const ContactsComponent: React.FC<PropsContacts> = ({ contacts }) => {
  const message = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: "",
      email: "",
      messages: "",
    },
  });

  const { mutateAsync: sendMessage } = useSendMessage();

  const handlerSubmit = async (data: z.infer<typeof messageSchema>) => {
    await sendMessage(data);
    toast.success(
      "Merci de m'avoir envoyé un message et vous réponderais dans les plus bref délai",
      { position: "top-right" },
    );
  };

  const size = 65;

  return (
    <motion.div id="contacts" {...animationFadeIn} className="flex w-full">
      <Card className="w-full bg-primary text-slate-100 border border-slate-400 shadow-[0_0_10px] shadow-slate-500">
        <CardContent className="flex flex-col md:flex-row gap-5 md:gap-0">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 gap-10">
            <div>
              <h3 className="text-5xl text-oswald text-slate-500">{contacts?.title}</h3>
              <p className="text-2xl">{contacts?.subtitle}</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-5 w-full text-slate-400">
                {contacts?.social.map((socialNetwork) => {
                  return (
                    <a key={socialNetwork.link} href={socialNetwork.link}>
                      {icons[socialNetwork.icon.toLocaleLowerCase()](size)}
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2 my-5">
                {contacts?.contact.map((contact) => {
                  return (
                    <div key={contact.info} className="flex items-center gap-2">
                      {icons[contact.icon] ? icons[contact.icon](15) : ""} {contact.info}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl mb-5 text-oswald text-slate-500 font-semibold">
              {contacts?.form.title}
            </h4>
            <form onSubmit={message.handleSubmit(handlerSubmit)}>
              <FieldGroup>
                <Controller
                  name="name"
                  control={message.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>{contacts?.form.fields[0].label}</FieldLabel>
                        <Input
                          {...field}
                          className="bg-secondary"
                          id="name-message"
                          aria-invalid={fieldState.invalid}
                          placeholder={contacts?.form.fields[0].placeHolder}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    );
                  }}
                />{" "}
                <Controller
                  name="email"
                  control={message.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>{contacts?.form.fields[1].label}</FieldLabel>
                        <Input
                          {...field}
                          type="email"
                          className="bg-secondary"
                          id="name-message"
                          aria-invalid={fieldState.invalid}
                          placeholder={contacts?.form.fields[1].placeHolder}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    );
                  }}
                />
                <Controller
                  name="messages"
                  control={message.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>{contacts?.form.fields[2].label}</FieldLabel>
                        <Textarea
                          {...field}
                          id="name-message"
                          className="bg-secondary h-32"
                          aria-invalid={fieldState.invalid}
                          placeholder={contacts?.form.fields[2].placeHolder}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    );
                  }}
                />
                <Button className="bg-blue-800 p-5 text-xl font-semibold hover:bg-blue-950">
                  {contacts?.form.send}
                </Button>
              </FieldGroup>
            </form>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactsComponent;
