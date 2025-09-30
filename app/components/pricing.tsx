// "use client";

import React from 'react';
import { canela } from '../fonts';
import Button from './button';
import { BsCheckSquareFill } from 'react-icons/bs';

interface PricingCardProps {
  title: React.ReactNode;
  price: number | string;
  popular?: boolean;
  features: string[];
  buttonText: React.ReactNode;
  dark?: boolean;
}

const PricingCard = ({ title, price, popular = false, features, buttonText, dark = false }: PricingCardProps) => {
  return (
    <div
      className={`w-full rounded-4xl p-10 ${dark ? "bg-[#1e1e42] text-white border-none" : "bg-white text-[#24284D]"
        } border border-[#24284D66]`}
    >
      <div className="mb-2">
        <h2 className={`${canela.className} text-4xl mb-1`} >{title}</h2>
        <span className={`inline-block text-xs bg-[#bbb8ff] text-[#1e1e42] px-4 py-1 rounded-full mb-2 ${popular ? "visible" : "invisible"}`}>
          Popular
        </span>
      </div>
      <p className="text-4xl">${price}</p>
      <p className="text-sm font-light mb-8">Per User/By Month, billed annually</p>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <BsCheckSquareFill className="text-[#99A0DF] rounded-md text-2xl" />
            <span className="text-sm font-light py-1">{f}</span>
          </li>
        ))}
      </ul>
      {/* TODO: Tertiary button for dark */}
      <div className='flex justify-center'>
        <Button variant={dark ? 'tertiary' : 'primary'}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
