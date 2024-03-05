import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [answer, setAnswer] = useState<QuestionType>("short_answer_question");
    const rec: Record<QuestionType, QuestionType> = {
        short_answer_question: "multiple_choice_question",
        multiple_choice_question: "short_answer_question"
    };
    const text_rec: Record<QuestionType, string> = {
        short_answer_question: "Short Answer",
        multiple_choice_question: "Multiple Choice"
    };

    return (
        <div>
            <Button onClick={() => setAnswer(rec[answer])}>Change Type</Button>
            {text_rec[answer]}
        </div>
    );
}
