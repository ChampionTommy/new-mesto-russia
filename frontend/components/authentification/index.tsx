'use client';

import React, { type FC } from 'react';
import Image from 'next/image';
import { Icon24Cancel } from '@vkontakte/icons';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '@/redux/store';
import { closeModal } from '@/redux/slices/modal';
import { Registration } from '../registration';
import { Authorization } from '../authorization';
import { type PropsAuth, type authorizeType } from '@/utils/interfaces';

const PLAN_AUTH: Record<authorizeType, FC> = {
  auth: Authorization,
  register: Registration,
};
export const Authentification: FC<PropsAuth> = ({ authorizetype }) => {
  const dispatch = useDispatch<AppDispatch>();
  const AuthView = PLAN_AUTH[authorizetype];

  return (
    <>
      <div className="relative flex items-center text-xl leading-7 mx-8">
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute right-[16px] icon-button h-[32px] w-[32px]"
          type="button"
        >
          <Icon24Cancel />
        </button>
      </div>
      <div className="flex flex-col items-center mx-[32px] will-change-transform">
        <div className="relative flex flex-col items-center text-center max-w-xs min-h-[400px] w-[250px]mx-auto my-0 will-change-default">
          <div className="app-logo">
            <Image
              src="./logo.svg"
              width={0}
              height={0}
              alt="logo"
              sizes="100vw"
              priority={true}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <AuthView />
          </div>
        </div>
      </div>
    </>
  );
};
