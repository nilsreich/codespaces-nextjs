import { cva, type VariantProps } from "class-variance-authority";

export interface ButtonProps
    extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {type?:'submit' }


const buttonStyles = cva(["font-semibold", "border", "rounded"], {
    variants: {
        intent: {
            primary: [
                "bg-blue-500",
                "text-white",
                "border-transparent",
                "hover:bg-blue-600",
            ],

            secondary: [
                "bg-white",
                "text-gray-800",
                "border-gray-400",
                "hover:bg-gray-100",
            ],
        },
        size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
        },
    },
    compoundVariants: [
        {
            intent: "primary",
            size: "medium",
            className: "uppercase",

        },
    ],
    defaultVariants: {
        intent: "primary",
        size: "medium",
    },
});

export const Button = ({
    className,
    intent,
    size,
    type,
    ...props
}: ButtonProps) => {
    const { children, ...rest } = props;
    return <button type={type || 'button'} className={buttonStyles({ intent, size, className })} {...rest}>{children}</button>;
};
