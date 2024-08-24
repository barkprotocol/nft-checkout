import { NextResponse } from "next/server";
import prisma from "../../../../prisma";  // Ensure this import matches your Prisma Client setup

export const GET = async (req: Request) => {
    try {
        // Fetch all donations from the database
        const donations = await prisma.donation.findMany();

        // Return donations as JSON response with a status code of 200 (OK)
        return NextResponse.json({ donations }, { status: 200 });
    } catch (error) {
        // Log the error for server-side debugging
        console.error('Error fetching donations:', error);

        // Return a JSON response with an error message and status code of 500 (Internal Server Error)
        return NextResponse.json({
            message: 'Server Error',
            error: error instanceof Error ? error.message : 'Unknown error',  // Include detailed error message
        }, { status: 500 });
    }
};
