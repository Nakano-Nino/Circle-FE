import { LikeType } from "./LikeType";
import { ReplyType } from "./ReplyType";
import { UserType } from "./UserType";

export type ThreadType = {
    id: number;
    content: string;
    image: string;
    users: UserType;
    created_at: string;
};

export type ThreadPost = {
	content: string;
    // image: Blob | MediaSource | string;
}