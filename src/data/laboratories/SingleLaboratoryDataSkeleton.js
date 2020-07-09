class SingleLaboratoryDataSkeleton {
    static getSingleLaboratoryDataSkeleton() {
        return {
            number: "last",
            title: "SingleLaboratoryDataSkeleton",
            subTitle: "laboratory",
            exercises: [
                {
                    number: "exercise_number",
                    title: "exercise_title",
                    panels: [
                        {
                            name: "sections",
                            sections: [
                                {
                                    title: "section_title",
                                    instructions: [
                                        {
                                            text: "instruction_text",
                                            command: "instruction_command",
                                            output: "instruction_output",
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            name: "question",
                            text: "question_text",
                        },
                        {
                            name: "result",
                            text: "result_text",
                        },
                        {
                            name: "solution",
                            text: "solution_text",
                        },
                    ],
                },
                {
                    title: "Database orientation",
                    panels: [
                        {
                            name: "sections",
                            sections: [
                                {
                                    title: "Basic commands",
                                    instructions: [
                                        {
                                            text: "List available databases:",
                                            command: "# \\l",
                                        },
                                    ]
                                }
                            ],
                        },
                        {
                            name: "question",
                            text: "Using \\d command check structure of each table created by script",
                        },
                        {
                            name: "result",
                            text: "result 2.2",
                        },
                        {
                            name: "solution",
                            text: "solution 2.2",
                        },
                    ],
                }
            ]
        };
    }
}

export default SingleLaboratoryDataSkeleton;