
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'El formato del correo no es válido';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje no puede estar vacío';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);

      const templateParams = {
        title: "SOLICITUD DE CONTACTO",
        name: formData.name,
        message: `${formData.email}\n\n${formData.message}`
      };

      emailjs.send(
        'service_w586otm',
        'template_8wvxrrq',
        templateParams,
        'n8DVPD3msYq-25taw'
      )
        .then(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitSuccess(false), 5000);
        })
        .catch((error: any) => {
          setIsSubmitting(false);
          console.error('FAILED...', error);
          alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        });
    }
  };

  return (
    <div className="bg-[#111821] py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">Hablemos</h2>
              <p className="text-xl text-[#9da9b8] leading-relaxed">
                ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-2xl border border-slate-800 hover:bg-surface-dark transition-all">
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#9da9b8] mb-1">Teléfono</p>
                  <p className="text-lg font-bold text-white">640 277 884 / 944 102 430</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-2xl border border-slate-800 hover:bg-surface-dark transition-all">
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#9da9b8] mb-1">Email</p>
                  <p className="text-lg font-bold text-white">aitormon@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-2xl border border-slate-800 hover:bg-surface-dark transition-all">
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#9da9b8] mb-1">Localización</p>
                  <p className="text-lg font-bold text-white">Bilbao, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* Foto de contacto - Center Column */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              <div className="absolute -inset-2 bg-primary/20 blur-2xl opacity-30"></div>
              <img
                src="/archivos/contacto.jpg"
                alt="Aitor Montalbán"
                className="relative rounded-3xl w-full h-full object-cover border-2 border-slate-800 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-5 bg-surface-dark border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl relative">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <h3 className="text-2xl font-black text-white mb-6">Envíame un mensaje</h3>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-black text-slate-300">Nombre / Empresa</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9da9b8]">person</span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre o empresa"
                    className={`w-full bg-background-dark border ${errors.name ? 'border-red-500' : 'border-slate-800'} rounded-xl p-4 pl-12 text-white outline-none focus:border-primary transition-all`}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs font-bold pl-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-black text-slate-300">Correo electrónico</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9da9b8]">alternate_email</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nombre@ejemplo.com"
                    className={`w-full bg-background-dark border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded-xl p-4 pl-12 text-white outline-none focus:border-primary transition-all`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs font-bold pl-1">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-black text-slate-300">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className={`w-full bg-background-dark border ${errors.message ? 'border-red-500' : 'border-slate-800'} rounded-xl p-4 text-white outline-none focus:border-primary transition-all resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs font-bold pl-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-14 bg-primary hover:bg-blue-600 rounded-xl font-black text-white transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin material-symbols-outlined">progress_activity</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span>
                    Enviar Mensaje
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-500 text-sm font-bold text-center animate-fade-in">
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </div>
              )}

              <p className="text-center text-xs text-[#9da9b8] font-medium pt-2">Todos los campos son obligatorios.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
