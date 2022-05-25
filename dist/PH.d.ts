import { State } from '@tr0j332/thermo';
export declare function solve(P: number, h: number): State;
export declare function r1_PH_T(P: number, h: number): number;
export declare function r2(P: number, h: number): State;
export declare function b2bc_H_P(h: number): number;
export declare function b2bc_P_H(P: number): number;
export declare function b3ab_P_H(P: number): number;
export declare function r3A_PH_V(P: number, h: number): number;
export declare function r3B_PH_V(P: number, h: number): number;
export declare function r4_H_Psat(h: number): number;
