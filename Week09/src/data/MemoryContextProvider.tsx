import { Directory, Filesystem } from "@capacitor/filesystem";
import React, { useState, useEffect, useCallback } from "react";

import MemoriesContext, {Memory} from "./memorycontext";

const MemoriesContextProvider: React.FC = props => {
    const [memories, setMemories] = useState<Memory[]>([]);

    const addMemory = (path: string,base64Data: string, title: string, type: 'good'|'bad', lat:number, long:number) => {
        const newMemory: Memory = {
            id: Math.random().toString(),
            title,
            type,
            imagePath: path,
            base64Url: base64Data,
            lat: lat,
            long: long
        }
        setMemories(curMemories => {
            return [...curMemories, newMemory];
        })
    }

    useEffect(() => {
        const storableMemories = memories.map(memory => {
            return {
                id: memory.id,
                title: memory.title,
                imagePath: memory.imagePath,
                type: memory.type,
                lat: memory.lat,
                long: memory.long
            }
        });
        localStorage.setItem('memories',JSON.stringify(storableMemories));
    }, [memories]);

    const initContext = useCallback(async () => {
        const memoriesData = await localStorage.getItem('memories');
        const storedMemories = memoriesData ? JSON.parse(memoriesData) : [];
        const loadedMemories: Memory[] = [];
        for (const storedMemory of storedMemories){
            const file = await Filesystem.readFile({
                path: storedMemory.imagePath,
                directory: Directory.Data
            })
            loadedMemories.push({
                id: storedMemory.id,
                title: storedMemory.title,
                type: storedMemory.type,
                imagePath: storedMemory.imagePath,
                base64Url: 'data:image/jpeg;base64,' + file.data,
                lat: storedMemory.lat,
                long: storedMemory.long
            });
        }
        setMemories(loadedMemories);
    },[])

    return (
        <MemoriesContext.Provider value={{memories, addMemory, initContext}}>
            {props.children}
        </MemoriesContext.Provider>
    )
}

export default MemoriesContextProvider;