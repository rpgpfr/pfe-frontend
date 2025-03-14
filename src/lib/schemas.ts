import {z} from "zod";

export const signupSchema = z.object({
    email: z.string().email({message: "L'adresse email n'est pas valide"}),
    username: z.string().min(4, {message: "Le nom d'utilisateur doit contenir au moins 4 caractères"}),
    firstName: z.string({message: "La valeur est incorrecte"}),
    lastName: z.string({message: "La valeur est incorrecte"}),
    password: z.string({message: "La valeur est incorrecte"}).min(8, {message: "Le mot de passe doit contenir au moins 4 caractères"})
});