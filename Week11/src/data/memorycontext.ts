import React from "react";

export interface Memory {
    id: string;
    imagePath: string;
    title: string;
    type: 'good' | 'bad';
    base64Url: string;
    lat: number;
    long: number;
}

const MemoriesContext = React.createContext <{
    memories: Memory[];
    addMemory: (path: string, base64Data: string, title: string, type: 'good' | 'bad', lat: number, long: number) => void;
    initContext: () => void;
}>({
    memories: [],
    addMemory: () => {},
    initContext: () => {}
})

export default MemoriesContext;