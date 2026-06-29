import { Card, CardContent } from "@/components/ui/card";
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaLocationPin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { animationFadeIn } from "@/lib/style";

const messageSchema = z.object({
  name: z.string().nonempty("Veuillez fournir votre nom"),
  email: z.email("Saisissez un email valide").nonempty("Veuillez fournir votre email!"),
  message: z.string().nonempty("Veuillez écrire votre message"),
});

const Contacts = () => {
  const message = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handlerSubmit = (data: z.infer<typeof messageSchema>) => {
    console.log(data);
    toast.success(
      "Merci de m'avoir envoyé un message et vous réponderais dans les plus bref délai",
      { position: "top-right" },
    );
  };
  const size = 65;

  const socialNetworks = [
    {
      link: "#facebook",
      icon: <FaFacebook size={size} className="hover:text-slate-500 text-slate-200" />,
    },
    {
      link: "#linkedin",
      icon: <FaLinkedin size={size} className="hover:text-slate-500 text-slate-200" />,
    },
    {
      link: "#github",
      icon: <FaGithub size={size} className="hover:text-slate-500 text-slate-200" />,
    },
  ];

  const contacts = [
    {
      info: "+261382626428",
      icon: <FaPhone className="hover:bg-slate-600 transition-all ease-in duration-500" />,
    },
    {
      info: "herizoras1@gmail.com",
      icon: <FaMailBulk className="hover:bg-slate-600 transition-all ease-in duration-500" />,
    },
    {
      info: "Madagascar, Antananarivo 101",
      icon: <FaLocationPin className="hover:bg-slate-600 transition-all ease-in duration-500" />,
    },
  ];

  return (
    <motion.div {...animationFadeIn} className="flex w-full">
      <Card className="w-full bg-primary text-slate-100 border border-slate-400 shadow-[0_0_10px] shadow-slate-500">
        <CardContent className="flex flex-col md:flex-row gap-5 md:gap-0">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 gap-10">
            <div>
              <h3 className="text-5xl text-oswald text-slate-500">Besoin de mes services!</h3>
              <p className="text-2xl">N'hesitez pas à me contacter</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-5 w-full text-slate-400">
                {socialNetworks.map((socialNetwork) => {
                  return (
                    <a key={socialNetwork.link} href={socialNetwork.link}>
                      {socialNetwork.icon}
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2 my-5">
                {contacts.map((contact) => {
                  return (
                    <div className="flex items-center gap-2">
                      {contact.icon} {contact.info}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl mb-5 text-oswald text-slate-500 font-semibold">
              Envoyez-moi un message
            </h4>
            <form onSubmit={message.handleSubmit(handlerSubmit)}>
              <FieldGroup>
                <Controller
                  name="name"
                  control={message.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Nom : </FieldLabel>
                        <Input
                          {...field}
                          className="bg-secondary"
                          id="name-message"
                          aria-invalid={fieldState.invalid}
                          placeholder="Saisir votre nom"
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
                        <FieldLabel>Email : </FieldLabel>
                        <Input
                          {...field}
                          type="email"
                          className="bg-secondary"
                          id="name-message"
                          aria-invalid={fieldState.invalid}
                          placeholder="Saisir votre email"
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    );
                  }}
                />
                <Controller
                  name="message"
                  control={message.control}
                  render={({ field, fieldState }) => {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Message : </FieldLabel>
                        <Textarea
                          {...field}
                          id="name-message"
                          className="bg-secondary h-32"
                          aria-invalid={fieldState.invalid}
                          placeholder="Saisir votre nom"
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    );
                  }}
                />
                <Button className="bg-blue-800 p-5 text-xl font-semibold hover:bg-blue-950">
                  Envoyer
                </Button>
              </FieldGroup>
            </form>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Contacts;
