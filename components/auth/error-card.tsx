import React from "react";
import { CardWrapper } from "./wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
      headerLabel='Oops! Something went wrong!'
    >
      <div className='w-full flex justify-center items-center'>
        <ExclamationTriangleIcon className='text-destructive w-10 h-10' />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
