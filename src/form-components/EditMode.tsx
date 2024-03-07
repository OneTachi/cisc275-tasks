import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your name");
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    label="edit?"
                    type="switch"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditMode(event.target.checked)
                    }
                />
            </Form.Group>
            {editMode ? (
                <>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            id="student"
                            type="switch"
                            checked={isStudent}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setStudent(event.target.checked)}
                            label="student"
                        />
                    </Form.Group>
                </>
            ) : (
                <div>
                    {name} is {isStudent ? "" : "not "}a student
                </div>
            )}
        </div>
    );
}
