const addTodoAsync = (): any => {
    return new Promise(((resolve, reject) => {
        resolve('asyncData')
    }))
};

export const requestApi = {
    addTodoAsync
};
