import { Dispatch } from 'react'
import { Merge, TGetDataFromState, THistory } from './index'

export type TState<T = any> = {
    data: T;
    error: any;
    loading: boolean;
    success: boolean;
    failed: boolean;
}

export type TConfirmState<T = any> = {
    open: boolean,
    title: string,
    message: string,
    onConfirm: () => void,
    loading: boolean,
}
export type TConfirmReducer<T = any> = (state: TConfirmState<T>, action) => TConfirmState<T>

export type TData<T extends Record<string, any>> = {
    count: number;
    results: T[];
}
export type TReducer<T> = (state: TState<T>, action) => TState<T>
export type TUseReducer<T> = [TState<T>, Dispatch<any>]

export type TSubmit = (data: any) => Promise<any>

export type TUseListParams = {
    mapper?: (history: THistory, pickparams: Array<string>) => void;
    pickParams?: Array<string>;
}

export type TUseModalParams = {
    autoClose?: boolean;
    key?: string | any;
    onSubmit?: (event: Event, onClose?: () => void) => Promise<void | Pick<any, string | number | symbol>>;
}

type TExtraUpdate = {
    onSubmit: TOnSubmit;
    initialValues?: Record<string, any>;
    id: any;
    isUpdate: boolean;
}

export type TUseCreateModalParams = {
    key?: string;
    action: (params) => (dispatch, store) => Promise<void>;
    stateName: string;
    onSuccess?: (data, values) => void;
    serializer?: (values) => void;
}
export type TUseUpdateModalParams = {
    key?: string;
    action: (id, data) => (dispatch, store) => Promise<void>;
    stateName: string;
    onSuccess?: (data, values) => void;
    serializer?: (values) => void;
    autoClose?: boolean;
}
export type TUseCreateItemModalParams = {
    key?: string;
    paramKey?: string;
    action: (id, params) => (dispatch, store) => Promise<void>;
    stateName: string;
    onSuccess?: (data, values) => void;
    serializer?: (values) => void;
}

export type TUseCreateModal<T extends any> = {
    loading: boolean;
    failed: boolean;
    data: T;
    open: boolean;
    onSubmit: TOnSubmit;
    onOpen: () => void;
    onClose: () => void;
}
export type TUseUpdateModal<T extends any> = {
    open: boolean;
    query: string;
    onSubmit: TOnSubmit;
    onOpen: (id) => void;
    onClose: () => void;
    loading: boolean;
    failed: boolean;
    data: T;
    initialValues?: Record<string, any>;
}
export type TUseModal = {
    open: boolean;
    onSubmit: TOnSubmit;
    onOpen: () => void;
    onClose: () => void;
}
export type TUseCustomModal = {
    open: boolean;
    onOpen: (id) => void;
    onClose: () => void;
    query: string;
    onSubmit: (event) => void;
}

export type TUseCreateDrawerParams = {
    action: (params) => (dispatch, store) => Promise<void>;
    stateName: string;
    redirectUrl?: string;
    onSuccess?: (data, values) => void;
    serializer?: (values) => void;
    onSuccessAction?: (params?) => (dispatch, store) => Promise<void>;
    key?: string;
    pickParams?: string[];
}

export type TUseUpdateDrawerParams = {
    stateName: string;
    action: (id, params) => (dispatch, store) => Promise<void>;
    redirectUrl?: string;
    initialValues?: Record<string, any>;
    onSuccess?: (data, values) => void;
    serializer?: (values: Record<string, any>) => void;
    successAction?: (params?) => (dispatch, store) => Promise<void>;
    key?: string;
    pickParams?: string[];
}

export type TUseUpdate = Merge<TGetDataFromState<any | null>, TExtraUpdate>
export type TUseCreate = Merge<TGetDataFromState<any | null>, {onSubmit: TOnSubmit}>
export type TOnSubmit = (action: any) => Promise<void | Pick<any, string | number | symbol>>
export type TUseDelete = Merge<TGetDataFromState<any | null>, {onSubmit: TOnSubmit}>
export type TUseRemove = {remove: TOnSubmit, state: TState<any | null>}
export type TUseConfirmRemove = {onSubmit: (id) => void, state: TState<any | null>}
export type TUseConfirm = Merge<TGetDataFromState<any | null>, {onSubmit: TOnSubmit}>
