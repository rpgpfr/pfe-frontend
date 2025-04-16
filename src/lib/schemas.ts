import {z} from "zod";

export const signupSchema = z.object({
    email: z.string().email({message: "L'adresse email est invalide"}),
    username: z.string().min(4, {message: "Le nom d'utilisateur doit contenir au moins 4 caractères"}),
    firstName: z.string({message: "La valeur est invalide"}),
    lastName: z.string({message: "La valeur est invalide"}),
    password: z.string({message: "La valeur est invalide"}).min(8, {message: "Le mot de passe doit contenir au moins 8 caractères"})
});

export const loginSchema = z.object({
    identifier: z.string(),
    password: z.string()
});

export const profileFormSchema = z.object({
    lastName: z.string({message: "Le nom est invalide"}).min(1, {message: "Un nom est requis"}),
    firstName: z.string({message: "Le prénom est invalide"}).min(1, {message: "Un prénom est requis"}),
    username: z.string({message: "Un nom d'utilisateur est invalide"}).min(4, {message: "Le nom d'utilisateur doit contenir au moins 4 caractères"}),
    email: z.string().email({message: "L'adresse email est invalide"})
});