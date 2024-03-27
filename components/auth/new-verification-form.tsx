"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "@/components/auth/wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-sucess";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (error || success) return;

    if (!token) {
      setError("Missing token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setError(data.error);
        setSuccess(data.success);
      })
      .catch((error: any) => {
        setError("Something went wrong!");
        console.log(error);
      });
  }, [token, error, success]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel='Confirming your verification'
      backButtonHref='/auth/login'
      backButtonLabel='Back to Login'
    >
      <div className='flex items-center justify-center w-full'>
        {!success && !error && <BeatLoader />}
        <FormError message={error} />
        <FormError message={success} />
        <FormSuccess />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
