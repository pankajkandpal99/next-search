import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}      // Yeh line Input component ke props ko define karta hai. InputProps interface React ke InputHTMLAttributes interface se extend hota hai, jisse hum standard HTML input element ke saare attributes ko Input component ke liye istemal kar sakte hain.

const Input = React.forwardRef<HTMLInputElement, InputProps>( //  Yeh line ek Input component ko define karta hai. React.forwardRef function se ek component ko forward reference ke saath create kiya jata hai. Isme pehla argument HTMLInputElement type ka ref ko accept karta hai aur doosra argument InputProps type ke props ko accept karta hai.
  ({ className, type, ...props }, ref) => {            // Here, the refrece are forwarding...
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
