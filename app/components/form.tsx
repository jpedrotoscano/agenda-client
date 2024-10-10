
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger
  } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";

const baseFormSchema = z.object({
    name: z.string()
        .min(1, "O nome é obrigatório!")
        .transform(name => {
            return name.trim().split(" ").map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(" ")
        }),
    email: z.string().min(1, "O email é obrigatório!").email("Email inválido!")
})

type baseFormSchema = z.infer<typeof baseFormSchema>

export function BaseForm() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<baseFormSchema>({
        resolver: zodResolver(baseFormSchema)
    })

                                                                                        
    function handleFormSubmit(data: baseFormSchema) {
        console.log(data)
    }

    return(
        <Dialog>
                <DialogTrigger className="w-3/5 " asChild>
                  <Button className="text-xl py-10">Economize meu tempo</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-3xl">Crie uma conta gratuitamente!</DialogTitle>
                  </DialogHeader>
                  <form 
                    onSubmit={handleSubmit(handleFormSubmit)}
                    className="flex flex-col gap-10"
                    id="base-form"
                  >
                    <div>
                      <Input 
                        {...register("name")} 
                        placeholder="Digite seu nome"
                        className={errors.name ? "border-red-600 focus-visible:border-red-600 focus-visible:outline-none focus-visible:border-2" : "focus-visible:outline-none focus-visible:border-gray-900"}
                      />
                      {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                    </div>
                    <div>
                      <Input
                        {...register("email")} 
                        placeholder="Digite seu email"
                        className={errors.name ? "border-red-600 focus-visible:border-red-600 focus-visible:outline-none focus-visible:border-2" : "focus-visible:outline-none focus-visible:border-gray-900"}
                      />
                      {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                    </div>
                    
                  </form>
                  <DialogFooter>
                        <Button form="base-form" type="submit">Economize tempo</Button>
                    </DialogFooter>
                </DialogContent>
              </Dialog>
    )
}

export function FullForm() {

}