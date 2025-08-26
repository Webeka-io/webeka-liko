'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("subject"),
  message: yup.string().required().label("Message"),
});

// prop type 
type IProps = {
  btnCls?: string;
}

export default function ContactForm({ btnCls = '' }: IProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Envoi direct au webhook Make
      const res = await fetch('https://hook.eu2.make.com/7xzucg3rzpnqyrfpvfq2ur24dst6v51y', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Tu peux aussi enrichir ici (ex: date, userAgent, etc.)
        body: JSON.stringify(data),
      });

      // Certains webhooks renvoient 200/202/204 — on vérifie simplement res.ok
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      alert('Merci ! Votre message a bien été envoyé.');
      reset();
    } catch (err) {
      console.error(err);
      alert("Désolé, l'envoi a échoué. Réessayez dans un instant.");
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label htmlFor="name">Nom</label>
        <input id="name" {...register("name")} type="text" placeholder="John Doe" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label htmlFor="subject">Sujet</label>
        <input id="subject" {...register("subject")} type="text" placeholder="Votre sujet" />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message")} placeholder="Décrivez votre secteur, vos couleurs, vos envies ..."></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>

      <div className="cn-contactform-btn">
        <button
          className={`tp-btn-black-md ${btnCls} w-100`}
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Envoi…' : 'Envoyer'}
        </button>
      </div>
    </form>
  );
}
