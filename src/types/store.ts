export type TData<T extends Record<string, any>> = {
    count: number;
    results: T[];
}
export type ITodo = {
    text: string;
    isCompleted: boolean;
};
export type ITodoState = {
    list: ITodo[];
};

export type IStore = {
    todo: ITodoState;
};

export type InitStore = {

}
