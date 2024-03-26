import { Schema, model, Document } from "mongoose";

interface Post extends Document {
    userId: string;
    desc?: string;
    img?: string;
    likes?: number[];
}

const postSchema = new Schema<Post> ({
    userId: {type: String, required: true},
    desc: {type: String, max: 500},
    img: {type: String},
    likes: {type: [Number]}
}, {timestamps: true});

const PostModel = model<Post>('Post', postSchema);

export {Post, PostModel};