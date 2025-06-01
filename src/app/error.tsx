"use client";

import {Button} from "@/components/ui";

import styles from "@/app/Error.module.css";
import {aladin} from "@/lib/utils";

const Error = () => {

    return (
        <main className={styles.errorPage}>
            <h1 className={`${aladin.className} ${styles.oops}`}>
                Oops, une erreur est survenue !
            </h1>

            <p>Veuillez réessayer plus tard.</p>

            <Button href={"/"} variant="primary" className="mt-3">
                Retour à l&apos;accueil
            </Button>
        </main>
    );

};

export default Error;