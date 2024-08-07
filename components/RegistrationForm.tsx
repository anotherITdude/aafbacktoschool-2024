"use client";
import React, { ChangeEvent, useRef } from "react";

import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import register_bg from "../public/register_bg.png";
import { schema } from "@/schemas/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Button from "./Button";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Input from "./Input";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  const motionSettingsleft2right = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema(t)) as any, // Use 'as any' to handle type mismatch

    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      emirate: "",
      eid: "",
      receipt: "",
      lan: locale === "/" ? "en" : "ar",
      selected: false,
      info: " ",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let toastStatus = toast.loading(t.uploading_data);
    
    try {
      setIsLoading(true);
      data.contentType = data.receipt[0].type;
      data.receiptName = data.receipt[0].name;
      const response = await axios
        .post("/api/entries", data)
        .then(async (res) => {
          console.log(res);
          const formData = new FormData();
          Object.entries(res.data.fields).forEach(([key, value]) => {
            formData.append(key, value as string);
          });
          formData.append("file", data.receipt[0]);
          console.log(formData);
          const uploadResponse = await fetch(res.data.url, {
            method: "POST",
            body: formData,
          });
          if (uploadResponse.ok) {
            console.log(t.upload_successfull);
          } else {
            console.log("S3 Upload Error:", uploadResponse);
            console.log("Upload failed.");
          }

          toast.dismiss(toastStatus);
          toast.success(t.submission_completed);
          reset();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      toast.error(t.upload_error_message + error);
      toast.dismiss(toastStatus);
    }
  };

  return (
    <div
      id="register"
      className="w-[90%] md:w-[70%]
    pb-14 pt-14 md:pt-0 md:pb-[0px]
    md:mt-[9%]  justify-center items-center  "
    >
      <div className="">
        <div className="right">
          <h2
            className={` text-webBlue text-center uppercase mb-8
          ${
            locale === "/"
              ? "font-Circular-Bold text-4xl md:text-5xl pl-4"
              : "font-helvetica-neue-lt-arabic-75-bol text-4xl md:text-6xl pr-4"
          }
          `}
          >
            {t.registration}
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pl-4 pr-4 pt-2 mt-1"
          >
            <div className="flex flex-col gap-x-6 gap-y-6 md:gap-y-0 mb-6 md:flex-row justify-evenly">
              <div className="form-field w-full ">
                <Input
                  id="name"
                  label={t.name}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  type="text"
                />
              </div>
              <div className="form-field w-full">
                <Input
                  id="mobile"
                  label={t.mobile}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-x-6 gap-y-6 md:gap-y-0 mb-6 md:flex-row justify-evenly">
              <div className="form-field w-full">
                <Input
                  id="email"
                  label={t.email}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  type="email"
                />
              </div>
              <div className="form-field w-full">
                <Input
                  id="emirate"
                  label={t.emirate}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  type="string"
                />
              </div>
            </div>

            <div className="flex flex-col gap-x-6 gap-y-6 md:gap-y-0 mb-6 md:flex-row justify-evenly">
            <div className="form-field w-full">
              <Input
                id="eid"
                label={t.emirate_id_number}
                disabled={isLoading}
                register={register}
                errors={errors}
                type="text"
              />
            </div>
            <div className="w-full">
            <div className="form-field w-full">
              <Input
                id="receipt"
                label={t.upload_purchase_receipt}
                disabled={isLoading}
                register={register}
                errors={errors}
                type="file"
              />
              <div
                className={`mt-2 ml-2 uppercase text-xs cursor-pointer text-[#002E6D] 
              ${
                locale === "/"
                  ? "font-Circular-Bold"
                  : "font-helvetica-neue-lt-arabic-75-bol"
              }`}
              >
                ( {t.max_upload_size} )
              </div>
            </div>
            </div>
            </div>
            <div
              className={` w-full flex justify-center items-center form-field pt-4 ${isLoading ? "animate-pulse" : ""}
              ${locale === "/" ? "float-left" : "float-right"}`}
            >
              <Button
                arrow={false}
                disabled={isLoading}
                label={`${isLoading ? t.form_submit_message : t.register_now}`}
              />
            </div>
            <motion.div {...motionSettingsleft2right} className="registration_image hidden md:block ">
              <Image className="m-auto max-w-[80%]" src={register_bg} alt="registration background" />
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
