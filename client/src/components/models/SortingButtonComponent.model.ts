import React from 'react';

export interface SortIconComponentModel {
    active: boolean;
    sortIcon: string;
}

export interface SortingButtonComponentModel {
    active: boolean;
    onClick: () => void;
    text: string;
    sortIcon: string;
}
