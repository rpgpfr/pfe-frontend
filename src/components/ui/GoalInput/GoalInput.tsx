import {ChangeEvent, FC} from "react";
import {clsx} from "clsx";
import {Check, Trash2} from "lucide-react";

import {Button} from "@/components/ui";
import {Goal} from "rpg-project/campaign";

import styles from "./GoalInput.module.css";

interface GoalInputProps {
    goal: Goal;
    index: number;
    handleChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
    handleDelete: (goal: Goal) => void;
}

const GoalInput: FC<GoalInputProps> = ({goal, index, handleChange, handleDelete}) => {

    const checkboxClassNames = clsx(styles.customCheckboxContainer, goal.completed && styles.completed);

    return (
        <div className={styles.goalInput}>
            <input type="text" value={goal.name} onChange={(e) => handleChange(e, index)}/>

            <div className={styles.buttonsContainer}>
                <div className={checkboxClassNames}>
                    <input type="checkbox" checked={goal.completed} onChange={(e) => handleChange(e, index)}/>

                    {
                        goal.completed &&
                        <Check className="w-full h-full p-1 text-white"/>
                    }
                </div>

                <Button variant="secondary" className="aspect-square flex justify-center items-center" onClick={() => handleDelete(goal)}>
                    <Trash2 className="w-6 h-6"/>
                </Button>
            </div>


        </div>
    );

};

export default GoalInput;