import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
    //size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    asChild?: boolean
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            className={clsx(
                "w-full py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm hover:bg-cyan-300 transition-colors focus:ring-2 ring-white active:bg-cyan-100",
                {

                })}>

            {children}
        </Comp>
    )
}