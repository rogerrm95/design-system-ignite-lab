import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    //size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    asChild?: boolean,
    className?: string
}

export function Button({ children, asChild, className = '', ...rest }: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            className={clsx(
                "w-full py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm hover:bg-cyan-300 transition-colors focus:ring-2 ring-white active:bg-cyan-100",
                className
            )}
            {...rest}
        >
            {children}
        </Comp>
    )
}