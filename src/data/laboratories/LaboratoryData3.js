class LaboratoryData3 {
    static getLaboratoryData3() {
        return {
            title: "exercise title #3",
            subTitle: "subTitle #3",
            exercises: [
                {
                    number: "3.1.1",
                    title: "exercise title #1",
                    subtitle: "exercise subTitle #1",
                    panels: [
                        {
                            name: "sections",
                            sections: [
                                {
                                    title: "section title #1",
                                    subTitle: "section subTitle #1",
                                    instructions: [
                                        {
                                            text: "text #1",
                                            command: "command #1",
                                            output: "output #1",
                                        },
                                    ]
                                },
                            ],
                        },
                        {
                            name: "question",
                            text: "question 3.1.1"
                        },
                        {
                            name: "result",
                            text: "result 3.1.1"
                        },
                        {
                            name: "solution",
                            text: "solution 3.1.1"
                        }
                    ],
                },
                {
                    number: "3.1.2",
                    panels: [
                        {
                            name: "question",
                            text: "question 3.1.2"
                        },
                        {
                            name: "result",
                            text: "result 3.1.2"
                        },
                        {
                            name: "solution",
                            text: "solution 3.1.2"
                        }
                    ],
                }
            ]
        };
    }
}

export default LaboratoryData3;