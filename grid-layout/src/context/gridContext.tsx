import { createContext } from "preact";
import { PropsWithChildren, useState } from "preact/compat";

type GridContextType = {
    columns: Columns,
    rows: Rows,
    setColumns: any;
    setRows: any;
}

type Columns = ((Rows | string)[] | string);
type Rows = ((Columns | string)[] | string);


export const GridContext = createContext<GridContextType>({} as GridContextType);

export function GridProvider({ children }: PropsWithChildren<{}>) {

    const [columns, setColumns] = useState<Columns>([]);
    const [rows, setRows] = useState<Rows>([]);

    const value = {
        columns,
        setColumns,
        rows,
        setRows
    }


    return (
        <>
            <GridContext.Provider value={{ ...value }}>
                {children}
            </GridContext.Provider>
        </>
    )

}