"use client";

import {ChangeEvent, useEffect, useState} from "react";

import {usePathname} from "next/navigation";
import {Character} from "rpg-project/campaign";
import {Card, Drawer, ImageActionCard, ImageContentCard} from "@/components";
import {Button, FormInput, Separator} from "@/components/ui";
import {Plus} from "lucide-react";

const CharactersCard = () => {

    const slug = usePathname().split("/")[2];

    const [characters, setCharacters] = useState<Character[]>([])
    const [newCharacterName, setNewCharacterName] = useState<string>("");

    useEffect(() => {
        const getCharacters = async () => {
            const options: RequestInit = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            };

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/campaigns/${slug}/characters`, options);
                const characters = await response.json();
                setCharacters(characters);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        getCharacters();
    }, [slug]);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleClose = () => {
        setIsDrawerOpen(false);
    };

    const handleUpdate = async (newName: string, oldName: string) => {
        try {
            const options: RequestInit = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    newName: newName,
                    oldName: oldName
                })
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/campaigns/${slug}/characters`, options);

            if (response.ok) {
                setCharacters(prev => prev.map(character => character.name === oldName ? {
                    ...character,
                    name: newName
                } : character));
            } else {
                console.error("Error updating character:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating character:", error);
        }
    };

    const handleDelete = async (name: string) => {
        try {
            const options: RequestInit = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: name
                })
            };

            console.log(name);

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/campaigns/${slug}/characters`, options);

            if (response.ok) {
                setCharacters(prev => prev.filter(character => character.name !== name));
            } else {
                console.error("Error deleting character:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting character:", error);
        }
    }

    const handleCreate = async () => {
        try {
            const options: RequestInit = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: newCharacterName
                })
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/campaigns/${slug}/characters`, options);

            if (response.ok) {
                setCharacters([...characters, {name: newCharacterName}]);
                setNewCharacterName("");
            } else {
                console.error("Error creating character:", response.statusText);
            }
        } catch (error) {
            console.error("Error creating character:", error);
        }
    }

    return (
        <Card title={"Personnages assignés"} onClick={handleOpen}>
            <div className={"h-full overflow-y-scroll w-full flex flex-col gap-4"}>
                {
                    characters?.map((character: Character) => (
                        <ImageContentCard key={character.name} imageSrc={"/images/placeholder.png"} content={character.name}/>
                    ))
                }
            </div>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={handleClose}
                title="Personnages assignés"
            >
                <div className={'w-[600px] flex flex-col gap-2'}>
                    {
                        characters?.map((character: Character) => (
                            <ImageActionCard
                                key={character.name}
                                imageSrc={"/images/placeholder.png"}
                                imageAlt={character.name}
                                imageSize={80}
                                className={'w-full flex'}
                                content={character.name}
                                handleUpdate={handleUpdate}
                                handleDelete={() => handleDelete(character.name)}
                            />
                        ))
                    }

                    <Separator>
                        <p>Nouveau personnage</p>
                    </Separator>

                    <form className="w-full flex items-end gap-4">
                        <FormInput
                            label="Nom du personnage"
                            id="new-character"
                            type="text"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewCharacterName(e.target.value)}
                            className="w-full"
                            value={newCharacterName}
                        />

                        <Button variant="primary" className="flex justify-center items-center py-2" onClick={handleCreate}>
                            <Plus/>
                        </Button>
                    </form>

                </div>
            </Drawer>
        </Card>
    )
}

export default CharactersCard;