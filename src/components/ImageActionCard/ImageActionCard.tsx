"use client";

import Image from "next/image";
import {Check, Pencil, Trash2, X} from "lucide-react";

import {cn} from "@/lib/utils";
import {Button, FormInput} from "@/components/ui";

import styles from "./ImageActionCard.module.css";
import {ChangeEvent, FC, HTMLAttributes, useState} from "react";

interface ImageActionCardProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    imageAlt?: string;
    imageSize?: number;
    onView?: () => void;
    onAdd?: () => void;
    imageClassName?: string;
    handleDelete: () => void;
    handleUpdate: (newName: string, oldName: string) => void;
}

const ImageActionCard: FC<ImageActionCardProps> = ({
                                                       imageSrc,
                                                       imageAlt = "Image",
                                                       imageSize = 80,
                                                       className,
                                                       imageClassName,
                                                       handleDelete,
                                                       handleUpdate,
                                                       ...props
                                                   }) => {

    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [characterName, setCharacterName] = useState<string>(props.content ?? "");

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    }

    const handleCancel = () => {
        setCharacterName(props.content ?? "");
        toggleEditMode();
    }

    return (
        <div className={cn(styles.container, className)} {...props}>
            <div className="flex gap-4 items-center">
                <div className={cn(styles.image, imageClassName)}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={imageSize}
                        height={imageSize}
                        className="rounded"
                    />
                </div>

                {
                    isEditMode &&
                    <FormInput
                        type="text"
                        value={characterName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCharacterName(e.target.value)}
                        label={"Nom du personnage"}
                        id={props.content ?? ""}
                    />
                }

                {
                    !isEditMode &&
                    <p className="text-lg">
                        {characterName}
                    </p>
                }
            </div>

            <div className={styles.actions}>
                {
                    isEditMode &&
                    <>
                        <Button variant={'primary'} className={'p-4'} onClick={() => handleUpdate(characterName, props.content ?? "")}>
                            <Check className="h-5 w-5"/>
                        </Button>
                        <Button variant={'secondary'} className={'p-4'} onClick={handleCancel}>
                            <X className="h-5 w-5"/>
                        </Button>
                    </>
                }

                {
                    !isEditMode &&
                    <>
                        <Button variant={'primary'} className={'p-4'} onClick={toggleEditMode}>
                            <Pencil className="h-5 w-5"/>
                        </Button>
                        <Button variant={'secondary'} className={'p-4'} onClick={handleDelete}>
                            <Trash2 className="h-5 w-5"/>
                        </Button>
                    </>
                }
            </div>
        </div>
    )
}

export default ImageActionCard;