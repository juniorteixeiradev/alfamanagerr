import React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

const spinnerVariants = cva('flex-col items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
  defaultVariants: {
    show: true,
  },
});

const loaderVariants = cva('animate-spin text-primary', {
  variants: {
    size: {
      small: 'size-6',
      medium: 'size-8',
      large: 'size-12',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function Loader({
  size,
  show,
  children,
  className,
}: SpinnerContentProps) {
  return (
    <div className=" flex justify-center items-center w-[100%] h-24">
      <span className="flex flex-col justify-center items-center text-sm text-zinc-700 text-center">
        <p className="text-center">Carregando dados aguarde</p>
        <Loader2 className={cn(loaderVariants({ size }), className)} />
        {children}
      </span>
    </div>
  );
}
