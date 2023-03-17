import mongoose from "mongoose";
export declare const FlightSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    pilot?: string;
    airplane?: string;
    destinationCity?: string;
    fligthDate?: string;
}>;
