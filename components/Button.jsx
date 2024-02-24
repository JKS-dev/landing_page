
import { Button } from "flowbite-react";

const customTheme = {
    color: {
        primary: "bg-red-500 hover:bg-red-600",
    },
};

export default function MyButton({ children, ...props }) {
    return (
        <Button theme={customTheme} {...props}>
            {children}
        </Button>
    );
}