import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ReduxState, TypedDispatch } from "./types";

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
