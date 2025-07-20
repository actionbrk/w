// "use client";

import React from 'react';
import { canela } from '../fonts';
import Button from './button';

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
      className={`w-full rounded-2xl p-6 ${dark ? "bg-[#1e1e42] text-white border-none" : "bg-white text-[#24284D]"
        } border border-[#24284D66]`}
    >
      <h2 className={`${canela.className} text-3xl font-semibold mb-1`} >{title}</h2>
      <span className={`inline-block text-xs bg-[#bbb8ff] text-[#1e1e42] px-2 py-1 rounded-full mb-2 ${popular ? "visible" : "invisible"}`}>
        Popular
      </span>
      <p className="text-4xl font-semibold">${price}</p>
      <p className="text-sm mb-4">Per User/By Month, billed annually</p>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="bg-[#bbb8ff] text-white rounded p-1">✔</span>
            {f}
          </li>
        ))}
      </ul>
      {/* TODO: Tertiary button for dark */}
      <Button variant={dark ? 'secondary' : 'primary'}>
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
