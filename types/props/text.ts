import type {HTMLAttributes} from "react";
import {RequireSelected} from "@/types/utils/RequireSelected";

export type HeadingProps = RequireSelected<HTMLAttributes<HTMLHeadingElement>, "children">

export type BodyProps = RequireSelected<HTMLAttributes<HTMLParagraphElement>, "children">