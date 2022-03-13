import React, { useState } from "react";
import Image from "next/image";
import { TextField, TextArea } from "../components/global";
import { useForm } from "react-hook-form";
import { CircularProgress, Snackbar, Alert, AlertProps } from "@mui/material";
import Send from "../../public/icons/send.svg";
import Whatsapp from "../../public/icons/whatsapp.svg";
import Facebook from "../../public/icons/facebook.svg";
import axios from "axios";

type formData = {
  firstName: string;
  lastName: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
};

const contacto = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formData>();
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "",
    message: "",
  });
  console.log(process.env.API);

  const onSubmit = async (formData: formData) => {
    setLoading(true);
    const {
      data: { success, message },
      status,
    } = await axios.post("/email", formData);
    console.log(status);
    setSnackbar({
      open: true,
      severity: success ? "success" : "error",
      message,
    });
    setLoading(false);
  };

  const closeSnackbar = () =>
    setSnackbar((prv) => ({ open: false, severity: "", message: "" }));

  return (
    <form
      className="flex min-h-screen space-x-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col flex-1 p-10 space-y-8">
        <span className="text-5xl font-bold text-white">Contactar</span>
        <div className="grid gap-5 gird-cols-1 md:grid-cols-2">
          <TextField
            placeholder="Nombre"
            error={errors.firstName?.message}
            {...register("firstName", { required: "Requerido" })}
          />
          <TextField
            placeholder="Apellido"
            error={errors.lastName?.message}
            {...register("lastName", { required: "Requerido" })}
          />
        </div>
        <TextField
          placeholder="Email"
          error={errors.email?.message}
          {...register("email", {
            required: "Requerido",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: "Email incorrecto",
            },
          })}
        />
        <TextField
          placeholder="Asunto"
          error={errors.subject?.message}
          {...register("subject", { required: "Requerido" })}
        />
        <TextArea
          placeholder="Mensaje"
          error={errors.message?.message}
          cols={30}
          rows={10}
          {...register("message", {
            required: "Requerido",
            minLength: {
              value: 10,
              message: "Mínimo 10 caracteres",
            },
          })}
        ></TextArea>
        <button className="flex w-56 mx-auto space-x-3 font-bold rounded-full btn-secondary">
          {loading ? (
            <CircularProgress size={40} color="inherit" />
          ) : (
            <>
              <span>Enviar</span>
              <Send />
            </>
          )}
        </button>
        <div className="flex items-center w-full mx-auto space-x-2">
          <div className="flex-1 h-[1px] bg-white"></div>
          <span className="text-lg text-white">o</span>
          <div className="flex-1 h-[1px] bg-white"></div>
        </div>
        <div className="flex justify-center w-full space-x-10">
          <a
            href="https://wa.me/593979372502?lang=es"
            target="_blank"
          >
            <Whatsapp className="transform scale-150" />
          </a>
          <a href="https://www.facebook.com/econitre" target="_blank">
            <Facebook className="transform scale-150" />
          </a>
        </div>
      </div>
      <div className="relative flex-1 hidden md:block">
        <Image
          src="/images/zoe-schaeffer-DRnlxW3Qsi8-unsplash.jpg"
          alt="granjero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbar.severity as any}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default contacto;
