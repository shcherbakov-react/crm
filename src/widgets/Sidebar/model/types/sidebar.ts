import React from 'react';

export interface NestedType {
    text: string;
    path: string;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
}
export interface SidebarItemType {
    path?: string;
    text: string;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
    nested?: [NestedType]
}
