
/**
 * PlaceType is an [object] with following properties:
 * [id]: int,
 * address: String
 */
const PlaceType = {
    "Außenanlage": {
        "JobId": "123",
        "Tasks": [{
            "TaskId": "1",
            "TaskName": "Test Task 1",
            "SubTasks": [{
                "SubTaskId": "1",
                "SubTaskName": "Test Sub Task 1"
            },
                {
                    "SubTaskId": "2",
                    "SubTaskName": "Test Sub Task 2"
                },
                {
                    "SubTaskId": "3",
                    "SubTaskName": "Test Sub Task 3"
                }
            ]
        },
            {
                "TaskId": "2",
                "TaskName": "Test Task 2",
                "SubTasks": [{
                    "SubTaskId": "1",
                    "SubTaskName": "Test Sub Task 1"
                },
                    {
                        "SubTaskId": "2",
                        "SubTaskName": "Test Sub Task 2"
                    },
                    {
                        "SubTaskId": "3",
                        "SubTaskName": "Test Sub Task 3"
                    }
                ]
            },
            {
                "TaskId": "3",
                "TaskName": "Test Task 3",
                "SubTasks": [{
                    "SubTaskId": "1",
                    "SubTaskName": "Test Sub Task 1"
                },
                    {
                        "SubTaskId": "2",
                        "SubTaskName": "Test Sub Task 2"
                    },
                    {
                        "SubTaskId": "3",
                        "SubTaskName": "Test Sub Task 3"
                    }
                ]
            }
        ]
    }
}
