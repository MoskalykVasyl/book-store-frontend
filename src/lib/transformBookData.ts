import type { AddBookSchema } from "@/components/forms/AddBookForm/schema";

export type AddBookDto = Omit<AddBookSchema, 'publicYear'> & {
    publicYear: string;
}

export const transformBookData = (data: AddBookSchema): AddBookDto => {
    return {
        ...data,
        publicYear: new Date(`${data.publicYear}-01-01`).toISOString(),
    }
}