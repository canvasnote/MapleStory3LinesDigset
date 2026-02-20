import { ReactNode } from "react"

export type GlossaryDefine = {
    categories: CategoryDefine[]
}

export type CategoryDefine = {
    categoryName: string,
    subCategories: SubCategoryDefine[]
}

export type SubCategoryDefine = {
    subCategoryName: string,
    words: WordDefine[]
}

export type WordDefine = {
    name: ReactNode,
    description: ReactNode
}